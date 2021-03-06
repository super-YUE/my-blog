# 上传组件

总结一下文件上传组件的要点

- 实现上传进度
- 大文件上传(分片上传)
- 失败重传
- 断点续传

## 上传进度

onprogress这个事件，它是XMLHttpRequest对象的一个回调函数，在上传或者下载过程中会周期性执行。接受一个参数event，event有两个参数：

- loaded：已经传输的数量
- total：要传输的总数量

```js
var xhr = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xhr.open(method, url, true);
xhr.onprogress = function (event) {
  //do something 
  const progressRatio = event.loaded / event.total
};
xhr.send();
```

在axios中的配置选项中也提供了对应的接口：

```js
{
 // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },
}
```

## 大文件上传

### 前端

前端大文件上传网上的大部分文章已经给出了解决方案，核心是利用 `Blob.prototype.slice` 方法，和数组的 slice 方法相似，调用的 slice 方法可以返回原文件的某个切片。

这样我们就可以根据预先设置好的切片最大数量将文件切分为一个个切片，然后借助 http 的可并发性，同时上传多个切片，这样从原本传一个大文件，变成了同时传多个小的文件切片，可以大大减少上传时间。由于是并发，传输到服务端的顺序可能会发生变化，所以我们还需要给每个切片记录顺序。

### 服务端

服务端需要负责接受这些切片，并在接收到所有切片后合并切片。

- 合并切片

前端在每个切片中都携带切片最大数量的信息，当服务端接受到这个数量的切片时自动合并，也可以额外发一个请求主动通知服务端进行切片的合并

- 合并切片的方式

使用 nodejs 的 读写流（readStream/writeStream），将所有切片的流传输到最终文件的流里。

### 上传切片

- 对文件进行切片

上传文件时，调用切片方法，将文件切片，切片的数量由文件大小控制。在生成文件切片时，需要给每个切片一个标识作为 hash，这样后端可以知道当前切片是第几个，用于之后的合并切片。

- 将切片传输给服务端后发送合并请求

通过promise.all进行并发上传。待上传切片完成后，发送合并请求，通知后端进行合并。

### 显示上传进度

上传进度分两种，一个是每个切片的上传进度，另一个是整个文件的上传进度，而整个文件的上传进度是基于每个切片上传进度计算而来。

切片上传进度条可以直接使用原生的`onprogress`即可。

- 合并上传进度

每个切片都需要触发独立的监听事件，所以还需要一个工厂函数，根据传入的切片返回不同的监听函数。通过对每个上传对象加上`percentage`参数，实时更新上传百分比。

- 文件进度条

将每个切片已上传的部分累加，除以整个文件的大小，就能得出当前文件的上传进度，所以这里使用 Vue 计算属性

### 总结

以上就是大文件上传的一个基本的思路了。

## 断点续传

断点续传的原理在于前端/服务端需要记住已上传的切片，这样下次上传就可以跳过之前已上传的部分，有两种方案实现记忆的功能

- 前端记录已上传的切片 hash
- 服务端保存已上传的切片 hash，前端每次上传前向服务端获取已上传的切片

前端不太可控，存储信息可能会丢失，所以使用服务端方案来做。

### 生成hash

可以通过文件指纹的方式来生成文件的hash，需要用到 `spark-md5` ,它可以根据文件内容计算出文件的 `hash` 值, 另外考虑到如果上传一个超大文件，读取文件内容计算 hash 是非常耗费时间的，并且会引起 UI 的阻塞，导致页面假死状态，所以我们使用 `web-worker` 在 worker 线程计算 hash，这样用户仍可以在主界面正常的交互。

实例化 `web-worker` 时，参数是一个 js 文件路径且不能跨域，所以我们单独创建一个 `hash.js` 文件放在 public 目录下，另外在 worker 中也是不允许访问 dom 的，但它提供了importScripts 函数用于导入外部脚本，通过它导入 `spark-md5`

在 `worker` 线程中，接受文件切片 `fileChunkList`，利用 `FileReader` 读取每个切片的 `ArrayBuffer` 并不断传入 `spark-md5` 中，每计算完一个切片通过 `postMessage` 向主线程发送一个进度事件，全部完成后将最终的 hash 发送给主线程

## 文件秒传

文件秒传，即在服务端已经存在了上传的资源，所以当用户再次上传时会直接提示上传成功, 文件秒传需要依赖上一步生成的 hash，即在上传前，先计算出文件 hash，并把 hash 发送给服务端进行验证，由于 hash 的唯一性，所以一旦服务端能找到 hash 相同的文件，则直接返回上传成功的信息即可.
