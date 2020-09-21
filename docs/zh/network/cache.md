# http缓存机制

Web缓存的作用

- 提高首屏加载速度->优化用户体验
- 减少流量消耗
- 减轻服务器压力

## 强缓存策略

直接拿本地副本对比读取，不读服务器，返回状态码是200

使用定时器的方式，让强缓存设置静态资源的有效期，如果超过有效期则认为缓存作废。

### http1.0

## 协商缓存

协商缓存指的是浏览器和服务器之间是否要使用缓存在做协商。如果协商的结果是需要更新会返回200并返回更新内容。如果不需要只需要返回状态码304不用返回内容，只是需要后端做应答，但是不需要后端重新生成内容。

### last-modified & if-modified-since

这是一组通过协商修改时间为基础的策略。

### etag

通过内容判断，一般的做法是将返回内容进行摘要，然后通过对比来判断内容是否需要更新。

## Ajax缓存

## ServiceWorker