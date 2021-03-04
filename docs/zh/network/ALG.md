# ALG应用层

## DNS

### DNS为什么用TCP和UDP

#### DNS区域传输的时候使用TCP协议

辅域名服务器会定时（一般3小时）向主域名服务器进行查询以便了解数据是否有变动。如有变动，会执行一次区域传送，进行数据同步。区域传送使用TCP而不是UDP，因为数据同步传送的数据量比一个请求应答的数据量要多得多。

#### 域名解析时使用UDP协议

客户端向DNS服务器查询域名，一般返回的内容都不超过512字节，用UDP传输即可。不用经过三次握手，这样DNS服务器负载更低，响应更快。理论上说，客户端也可以指定向DNS服务器查询时用TCP，但事实上，很多DNS服务器进行配置的时候，仅支持UDP查询包。

## http

### keep-alive模式

http1.0没有keep-alive，每次传输后都要重新连接，导致握手时间的资源浪费。http1.1增加了 `keep-alive` 之后,握手之后可以保持连接，保持连接之后管道被复用。达到性能优化的效果。

Keep-Alive: timeout=20，表示这个TCP通道可以保持20秒
max=XXX，表示这个长连接最多接收XXX次请求就断开

### tcp keep-alive

tcp中的keep-alive是用来做 `心跳监测` ，定时发送一个空的 TCP Segment，来监测连接是否存活

### 长链接和短链接

1. 长连接多用于操作频繁，点对点的通讯，而且连接数不能太多情况。例如：数据库的连接用长连接， 如果用短连接频繁的通信会造成socket错误，而且频繁的socket 创建也是对资源的浪费。

2.而像WEB网站的http服务一般都用短链接，因为长连接对于服务端来说会耗费一定的资源。如加载图片资源等。

长连接:连接→数据传输→保持连接(心跳)→数据传输→保持连接(心跳)→……→关闭连接（一个TCP连接通道多个读写通信）；

短连接:连接→数据传输→关闭连接；

### 报文长度

- 使用Content-Length表示body报文体的长度。

- 报文头中的Transfer-Encoding: chunked ,表示报文体body是使用chunked分块方式拼接成的，不需要Content-Length指明长度，chunk编码由一个标明长度为0的chunk标示结束。

## socket套接字

- 流格式套接字（SOCK_STREAM）

流格式套接字（Stream Sockets）也叫“面向连接的套接字”，在代码中使用 SOCK_STREAM 表示。SOCK_STREAM 是一种可靠的、双向的通信数据流，数据可以准确无误地到达另一台计算机，如果损坏或丢失，可以重新发送。

SOCK_STREAM 有以下几个特征：

1. 数据在传输过程中不会消失；
2. 数据是按照顺序传输的；
3. 数据的发送和接收不是同步的（有的教程也称“不存在数据边界”）。

为什么流格式套接字可以达到高质量的数据传输呢？因为它使用了 TCP 协议，TCP 协议会控制你的数据按照顺序到达并且没有错误。

- 数据报格式套接字（UDP）

数据报格式套接字（Datagram Sockets）也叫“无连接的套接字”，在代码中使用 SOCK_DGRAM 表示。计算机只管传输数据，不作数据校验，如果数据在传输中损坏，或者没有到达另一台计算机，是没有办法补救的。

因为数据报套接字所做的校验工作少，所以在传输效率方面比流格式套接字要高。它有以下特征：

- 强调快速传输而非传输顺序；
- 传输的数据可能丢失也可能损毁；
- 限制每次传输的数据大小；
- 数据的发送和接收是同步的（有的教程也称“存在数据边界”）。

数据报套接字也使用 IP 协议作路由，使用 UDP 协议（User Datagram Protocol，用户数据报协议）。