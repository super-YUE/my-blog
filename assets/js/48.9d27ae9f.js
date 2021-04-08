(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{431:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"限流算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限流算法"}},[t._v("#")]),t._v(" 限流算法")]),t._v(" "),a("p",[t._v("今天和后端小哥哥聊天，问了一下我限流算法，简单了解了一下。")]),t._v(" "),a("h2",{attrs:{id:"计数器算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计数器算法"}},[t._v("#")]),t._v(" 计数器算法")]),t._v(" "),a("p",[t._v("计数器算法(Counter) 就是一个计数器 , 在单位时间内可以通过n个请求 , 我呢每进来一个请求, 我就将计数器+1 , 当计数器到达了n,此时就不让请求过去 , 但是存在一个问题: 边界问题，比如在单位时间-1000ms 的时候过来100个请求 , 当刚刚过了1000ms的时候重置了，但是又来了100个请求 , 此时就会发生实际上在这2S的时候处理了200个请求 , 严重超载了, 此时服务器处理不了就导致错误了。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CounterLimiter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initFLow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_FlOW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      initFlow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initFLow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_FlOWv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果限流就拒绝")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initFlow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("h2",{attrs:{id:"滑动窗口算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口算法"}},[t._v("#")]),t._v(" 滑动窗口算法")]),t._v(" "),a("p",[t._v("滑动窗口算法是将时间周期分为N个小周期，分别记录每个小周期内访问次数，并且根据时间滑动删除过期的小周期。")]),t._v(" "),a("p",[t._v("如下图，假设时间周期为1min，将1min再分为2个小周期，统计每个小周期的访问数量，则可以看到，第一个时间周期内，访问数量为75，第二个时间周期内，访问数量为100，超过100的访问则被限流掉了")]),t._v(" "),a("p",[t._v("由此可见，当滑动窗口的格子划分的越多，那么滑动窗口的滚动就越平滑，限流的统计就会越精确。")]),t._v(" "),a("p",[t._v("此算法可以很好的解决固定窗口算法的临界问题。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/5WyR3M.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/PENG_YUE/myImg/raw/master/uPic/5WyR3M.png"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"漏桶算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏桶算法"}},[t._v("#")]),t._v(" 漏桶算法")]),t._v(" "),a("p",[t._v("漏桶算法是访问请求到达时直接放入漏桶，如当前容量已达到上限（限流值），则进行丢弃（触发限流策略）。漏桶以固定的速率进行释放访问请求（即请求通过），直到漏桶为空。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/GJSwJo.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/PENG_YUE/myImg/raw/master/uPic/GJSwJo.png"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"令牌桶算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#令牌桶算法"}},[t._v("#")]),t._v(" 令牌桶算法")]),t._v(" "),a("p",[t._v("令牌桶算法是程序以r（r=时间周期/限流值）的速度向令牌桶中增加令牌，直到令牌桶满，请求到达时向令牌桶请求令牌，如获取到令牌则通过请求，否则触发限流策略")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/FGOV5W.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/PENG_YUE/myImg/raw/master/uPic/FGOV5W.png"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);