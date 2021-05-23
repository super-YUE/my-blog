# 静态资源优化

## 图片

### JPEG（Joint Photographic Experts Group）

- JPEG是一种针对彩色照片而广泛使用的有损压缩图形格式
- 格栅图形，常用文件拓展名为.jpg，也有.jpeg、.jpe。JPEG在互联网上常用于存储和传输图片。
- 不适合: 线条图形和文字，图标图形，因为其算法不支持这类型的图形，并且不支持透明度。
- 非常合适：颜色丰富的照片，彩色图大焦点图，通栏banner图;结构不规则的图形。

### PNG（Portable Network Graphics）

- 便携式网络图形是一种无损压缩的位图图形格式，支持索引、灰度、RGB三种颜色方案已经Alpha通道特性
- 格栅图形，PNG最初是作为替代GIF来设计的，能够显示256色，文件比JPEG或者GIF大，但是PNG非常好的保留来图像质量，支持Alpha通道的半透明和透明特性，最高支持24位彩色图像（png-24）和8位灰度图像（png-8）
- 不适合：由于是无损存储，彩色图像体积太大，不太适合。
- 适合：纯色，透明，线条绘图，图标;边缘清晰，有大块相同颜色区域；颜色数较少，但需要半透明。

### GIF（Graphics Interchange Format）

- 图像互换格式是一种位图图形文件格式，以8位色（即256种颜色）重现真彩色的图像，采用LZW压缩算法进行编码
- 介绍：格栅图形。支持256色；仅支持完全透明和不透明；如果需要通用动画，GIF是唯一选择。
- 不适合：每个像素只要8比特，不适合存储彩色图片
- 非常适合：动画，图标

### webp

- 现代化的图像格式，可为图像提供有损压缩和无损压缩，使其非常灵活。
- 可以插入多帧，实现动画效果，可以设置透明度，采用8位压缩算法。无损的webp比png小26%，有损的webp比jpeg小25%-34%，比gif有更好的动画。
- 不适合：最多处理256色，不适合于彩色图片。
- 适合：适用于图形和半透明图像。

### 如何让图片加载更快

- 压缩图片
- 不同网络环境加载不同尺寸和像素的图片，通过在图片URL后缀来加载不同类型的图片。

### 响应式图片

- JavaScript绑定事件检测窗口大小
- css的媒体查询
- img标签属性

### 逐步加载图像

- 使用统一占位符
- 使用LOIP
  - 低质量图像占位符
- 使用SQIP
  - 基于SVG的图像占位符
- 使用web font代替图片
- 使用data url代替图片
- 使用image spriting 代替图片

### 服务器端进行优化

- 图片服务器自动优化是可以在图片URL链接上增加不同特殊参数，服务器自动化生成
- 不同格式，大小，质量的图片
- 图片裁剪
- 图片格式转换,支持不同的图片压缩率
- 图片处理，添加图片水印等
- 使用AI能力

## html优化

- 减少HTML嵌套
- 减少
- 减少无语义代码
- 删除http和https，如果url的协议头和当前页面的协议头是一致的，或者此URL在多个协议头都是可用的，可用考虑删除协议头。
- 删除多余的空格，换行符，缩进和不必要的注释
- 省略冗余标签和属性
- 使用相对路径URL

## 文件放在合适的位置

### css样式文件链接尽量放在头部

- css加载不会阻塞Dom tree解析，但是会阻塞dom tree渲染，也会阻塞后面的JS执行。
- 任何body元素之前，可以确保在文档部分中解析了所有css样式（内联和外联），从而减少了浏览器必须重排文档的次数。如果放置在页面底部，就要等待最后一个css文件下载完成，此时会出现白屏。

### js引用放在HTML底部

- 防止JS的加载、解析、执行对阻塞页面后续元素的正常渲染

### 增强用户体验

- 设置favicon.ico

网站如果不设置favicon.ico，控制台会报错，页面的加载过程中也没有图标loading的过程。

- 增加首屏必要的css和js

页面如果需要等待所有依赖的js和css加载完才显示，则在渲染过程中页面会一直显示空白，影响用户体验。可以增加首屏必要的css和js，内联在html中。

## css优化

### 提升css渲染性能

- 谨慎使用expensive属性
  - 如:nth-child伪类，position:fixed定位

- 减少样式层级数
  - 如 div ul li span

- 避免使用占有过多CPU和内存的属性
  - 如text-indent: -9999px

- 尽量避免使用耗电量大的属性
  - 如CSS 3D transforms, CSS3 transition, Opacity

- 尽量避免使用css表达式
  - background-color: expensive((new Date()).getHours() % 2 ? '#fff' : '#000')

- 尽量避免使用通配选择器
  - body > a {font-weigth: bold}

- 避免类正则的属性选择器
  - *=, |=, ^=, $=

### 提升css文件加载性能

- 使用外链的css
- 尽量避免使用@import

### 精简CSS代码

- 使用缩写语句
- 删除不必要的零
- 删除不必要的单位，如px
- 删除过多的分号
- 删除空格和注释
- 尽量减少样式表的大小

### 合理使用Web Fonts

- 将字体部署在CDN上
- 将字体以base64形式保存在css中，并通过localStorage进行缓存

### css动画优化

- 尽量避免同时动画
- 延迟动画初始化
- 结合SVG

## 提升JS的执行效率

- 加载元素的顺序css文件放在`<head>`里面,js放在body里面
- 使用id选择器查找dom
- 保持函数的简洁
- 使用事件委托
- 使用事件节流

### js动画优化

- 避免添加大量js动画
- 尽量使用css3动画
- 尽量使用Canvas动画
- 合理使用requestAnimationFrame动画代替setTimeOut,setInterVal

### 合理使用缓存

- 合理缓存Dom对象
- 缓存列表长度
- 使用可缓存的Ajax

## 减少回流和重绘

### css

- 避免过多样式嵌套
- 避免使用css表达式
- 使用绝对定位，脱离文档流
- 减少float布局
- 图片最好设置`width`和`height`
- 使用`viewPort`设置屏幕缩放级别
- 尽量简化浏览器不必要的任务，减少页面重新布局
- 避免频繁设置样式
- 避免使用引起回流和重绘的属性，最好把相应的变量储存起来

### js

- 最小化回流和重排
- 控制绘制过程和绘制区域

## Dom编程优化

### 控制DOM大小

- 使用合理的业务逻辑
- 延迟加载即将展示的内容

### 简化DOM操作

- 对dom节点的操作进行统一处理，再统一插入到Dom，tree当中
- 可以使用fragment，尽量不在页面Dom tree 里直接操作
- 使用虚拟dom，通过diff算法简化和减少dom操作