(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{414:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"babel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[t._v("#")]),t._v(" babel")]),t._v(" "),a("p",[t._v("babel相关的知识点，包括babel配置和写个小插件.")]),t._v(" "),a("h2",{attrs:{id:"常用的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用的配置"}},[t._v("#")]),t._v(" 常用的配置")]),t._v(" "),a("h3",{attrs:{id:"插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),a("p",[t._v("Babel 是一个编译器（输入源码 => 输出编译后的代码）;编译过程分为：解析、转换、和打印输出。这些插件用于转换你的代码。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array-includes"')]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://www.babeljs.cn/docs/plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("常用的插件"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"preset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preset"}},[t._v("#")]),t._v(" preset")]),t._v(" "),a("p",[t._v("预设是已经定义好的一组插件。")]),t._v(" "),a("p",[a("code",[t._v("@babel/preset-env")]),t._v(": 不需要指定es版本,直接支持到最新标准。\n如果需要使用一些实验性质的"),a("code",[t._v("Presets")]),t._v("，需要安装"),a("code",[t._v("babel-preset-stage-x")])]),t._v(" "),a("ul",[a("li",[t._v("stage-0-设想（Strawman）:只是一个想法，可能有Babel插件。")]),t._v(" "),a("li",[t._v("stage-1-建议（Proposal）:值得跟进的。")]),t._v(" "),a("li",[t._v("stage-2-草案（Draft）:初始规范。")]),t._v(" "),a("li",[t._v("stage-3-候选（Candidate）:完成规范并在浏览器上初步实现。")]),t._v(" "),a("li",[t._v("stage-4-完成（Finished）:将添加到下一个年度版本中的。")])]),t._v(" "),a("h3",{attrs:{id:"polyfills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polyfills"}},[t._v("#")]),t._v(" Polyfills")]),t._v(" "),a("blockquote",[a("p",[t._v("@babel/polyfill")])]),t._v(" "),a("p",[t._v("在运行环境中并没有实现的一些方法，babel-polyfill 会给其做兼容。 但是这样做也有一个缺点，就是会污染全局变量，而且项目打包以后体积会增大很多，因为把整个依赖包也搭了进去。所以并不推荐在一些方法类库中去使用。")]),t._v(" "),a("p",[t._v("在babel7中，@babel/polyfill集成了"),a("code",[t._v("core-js/stable")]),t._v("，"),a("code",[t._v("core.js")]),t._v("使用了"),a("code",[t._v("es5")]),t._v("实现"),a("code",[t._v("es6，7，8，9，10")]),t._v("的功能，并且支持按需引入。\n"),a("code",[t._v("regenerator-runtime/runtime")]),t._v("，则是一个转化器的补充。像"),a("code",[t._v("Promise or WeakMap")]),t._v("这样的方法。")]),t._v(" "),a("h3",{attrs:{id:"babel-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-cli"}},[t._v("#")]),t._v(" @babel/cli")]),t._v(" "),a("p",[t._v("babel-cli可以支持在命令行中对js进行转换。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("babel xxx.js\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"指定输出文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指定输出文件"}},[t._v("#")]),t._v(" 指定输出文件")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("npx babel script.js --out-file script-compiled.js\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"监听文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听文件"}},[t._v("#")]),t._v(" 监听文件")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("npx babel script.js --watch --out-file script-compiled.js\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"加入source-maps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加入source-maps"}},[t._v("#")]),t._v(" 加入Source Maps")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("npx babel script.js --out-file script-compiled.js --source-maps\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"babel-plugin-transform-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-transform-runtime"}},[t._v("#")]),t._v(" @babel/plugin-transform-runtime")]),t._v(" "),a("p",[t._v("每个Babel编译后的脚本文件，都以导入的方式使用Babel的帮助函数，而不是每个文件都复制一份帮助函数的代码。")]),t._v(" "),a("ul",[a("li",[t._v("提高代码重用性，缩小编译后的代码体积。")]),t._v(" "),a("li",[t._v("防止污染全局作用域。（启用corejs配置），babel-polyfill会将Promise等添加成全局变量，污染全局空间。但是@babel/polyfill并不会。")]),t._v(" "),a("li",[t._v("默认使用@babel/runtime，corejs配置为2时，改为使用@babel/runtime-corejs2。")])]),t._v(" "),a("p",[t._v("几个包的包含关系")]),t._v(" "),a("ul",[a("li",[t._v("babel-polyfill仅仅是引用core-js、regenerator-runtime这两个npm包")]),t._v(" "),a("li",[t._v("@babel/runtime包含两个文件夹：helpers（定义了一些处理新的语法关键字的帮助函数）、regenerator（仅仅是引用regenerator-runtime这个npm包）。")]),t._v(" "),a("li",[t._v("@babel/runtime-corejs2包含三个文件夹：core-js（引用core-js这个npm包）、helpers（定义了一些处理新的语法关键字的帮助函数）、regenerator（仅仅是引用regenerator-runtime这个npm包）。")])]),t._v(" "),a("p",[t._v("@babel/runtime-corejs2 ≈ @babel/runtime + babel-polyfill;")]),t._v(" "),a("p",[t._v("@babel/runtime只能处理语法关键字，而@babel/runtime-corejs2还能处理新的全局变量（例如，Promise）、新的原生方法（例如，String.padStart")]),t._v(" "),a("h2",{attrs:{id:"babel解析原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel解析原理"}},[t._v("#")]),t._v(" babel解析原理")]),t._v(" "),a("p",[t._v("和编译器类似，babel 的转译过程也分为三个阶段，这三步具体是：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/4RpgZD.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"解析-parse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析-parse"}},[t._v("#")]),t._v(" 解析 Parse")]),t._v(" "),a("p",[t._v("将代码解析生成抽象语法树( 即AST )，也就是计算机理解我们代码的方式，一般来说每个 js 引擎都有自己的 AST，比如熟知的 v8，chrome 浏览器会把 js 源码转换为抽象语法树，再进一步转换为字节码或机器代码，而 "),a("code",[t._v("babel")]),t._v(" 则是通过 "),a("code",[t._v("babylon")]),t._v(" 实现的。简单来说就是一个对于 JS 代码的一个编译过程，进行了词法分析与语法分析的过程。")]),t._v(" "),a("h3",{attrs:{id:"转换-transform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换-transform"}},[t._v("#")]),t._v(" 转换 Transform")]),t._v(" "),a("p",[t._v("对于 AST 进行变换一系列的操作，"),a("code",[t._v("babel")]),t._v(" 接受得到 "),a("code",[t._v("AST")]),t._v(" 并通过 "),a("code",[t._v("babel-traverse")]),t._v(" 对其进行遍历，在此过程中进行添加、更新及移除等操作，通过 ImportDeclaration 可以得到依赖属性。")]),t._v(" "),a("h3",{attrs:{id:"生成-generate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-generate"}},[t._v("#")]),t._v(" 生成 Generate")]),t._v(" "),a("p",[t._v("将变换后的 AST 再转换为 JS 代码, 使用到的模块是 babel-generator。")]),t._v(" "),a("p",[t._v("而 babel-core 模块则是将三者结合使得对外提供的API做了一个简化。")]),t._v(" "),a("p",[t._v("babel 只是转译新标准引入的语法，这些是不会转译的，需要引入对应的 polyfill 来解决。在我们编写插件的主要专注于第二步转换过程的工作，专注于对于代码的转化规则的拓展，解析与生成的偏底层相关操作则有对应的模块支持。")]),t._v(" "),a("h3",{attrs:{id:"抽象语法树（ast）是怎么生成的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象语法树（ast）是怎么生成的"}},[t._v("#")]),t._v(" 抽象语法树（AST）是怎么生成的")]),t._v(" "),a("ul",[a("li",[t._v("分词：将整个代码字符串分割成语法单元数组（token）")])]),t._v(" "),a("p",[t._v("JS代码中的语法单元主要指如标识符、运算符、括号、数字、字符串、空格解析成最小单元。")]),t._v(" "),a("ul",[a("li",[t._v("语义分析：在分词结果的基础上分析语法单元之间的关系。")])]),t._v(" "),a("p",[t._v("将得到的词汇进行一个立体的组合，确定词语之间的关系。")]),t._v(" "),a("ol",[a("li",[t._v("语句(statement)，即指一个具备边界的代码区域，相邻的两个语句之间从语法上来讲互不影响，即调换顺序也不会产生语法错误。")]),t._v(" "),a("li",[t._v("表达式(expression)，则指最终有个结果的一小段代码，他可以嵌入到另一个表达式，且包含在语句中。")])]),t._v(" "),a("p",[t._v("简单来说语义分析既是对语句和表达式识别，这是个递归过程，解析中，babel会在解析每个语句和表达式的过程中设置一个暂存器，用来暂存当前读取到的词法单元，如果解析失败，就会返回之前的暂存点，再按照另一种方式进行解析，如果解析成功，则将暂存点销毁。类似于回溯算法。")]),t._v(" "),a("h2",{attrs:{id:"babel-plugin-import原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-import原理"}},[t._v("#")]),t._v(" babel-plugin-import原理")]),t._v(" "),a("p",[t._v("babel-plugin-import 提供组件的按需加载")]),t._v(" "),a("p",[t._v("将")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("转换成")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Button "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd/es/button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd/es/button/style'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"第一步-依赖收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步-依赖收集"}},[t._v("#")]),t._v(" 第一步 依赖收集")]),t._v(" "),a("p",[t._v("babel-plubin-import 会在 ImportDeclaration 里将所有的 specifier 收集起来。大致的AST如下:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/PENG_YUE/myImg/raw/master/uPic/fB0ZEQ.png",alt:"img"}})]),t._v(" "),a("p",[t._v("可以从这个 ImportDeclaration 语句中提取几个关键点：")]),t._v(" "),a("ul",[a("li",[t._v("source.value: antd")]),t._v(" "),a("li",[t._v("specifier.local.name: Button")]),t._v(" "),a("li",[t._v("specifier.local.name: Rate")])]),t._v(" "),a("p",[t._v("代码")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ImportDeclaration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" node "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码里 import 的包名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" libraryName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插件 options 的包名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" types "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// babel-type 工具函数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pluginState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPluginState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取状态")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" libraryName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("specifiers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("spec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isImportSpecifier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("spec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是不是 ImportSpecifier 类型的节点，也就是是否是大括号的")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 收集依赖")]),t._v("\n        pluginState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("specified"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("spec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" spec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imported"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        pluginState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("libraryObjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("spec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    pluginState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathsToRemove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[t._v("在 "),a("code",[t._v("babel")]),t._v(" 遍历了所有的 "),a("code",[t._v("ImportDeclaration")]),t._v(" 节点之后，就收集好了依赖关系，下一步就是如何收集。")]),t._v(" "),a("h3",{attrs:{id:"第二步-判断是否使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步-判断是否使用"}},[t._v("#")]),t._v(" 第二步 判断是否使用")]),t._v(" "),a("p",[t._v("收集了依赖关系之后，得要判断一下这些 "),a("code",[t._v("import")]),t._v(" 的变量是否被使用到了:")]),t._v(" "),a("p",[t._v("首先会进行如下的转换")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("转换到")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("判断其是否进行了转换")]),t._v(" "),a("h3",{attrs:{id:"第三步-生成引入代码（核心）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步-生成引入代码（核心）"}},[t._v("#")]),t._v(" 第三步 生成引入代码（核心）")]),t._v(" "),a("p",[t._v("第一步和第二步主要的工作是找到需要被插件处理的依赖关系：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Rate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nReactDOM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("code",[t._v("Button")]),t._v(" 组件使用到了，"),a("code",[t._v("Rate")]),t._v(" 在代码里未使用。所以插件要做的也只是自动引入 "),a("code",[t._v("Button")]),t._v(" 的代码和样式即可。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Button "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("转换成")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _button "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd/lib/button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd/lib/button/style'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("code",[t._v("babel-plugin-import")]),t._v(" 和普遍的 "),a("code",[t._v("babel")]),t._v(" 插件一样，会遍历代码的 "),a("code",[t._v("ast")]),t._v("，然后在 "),a("code",[t._v("ast")]),t._v(" 上做了一些事情：")]),t._v(" "),a("ol",[a("li",[t._v("收集依赖：找到"),a("code",[t._v("importDeclaration")]),t._v("，分析出包 "),a("code",[t._v("x")]),t._v(" 和依赖 "),a("code",[t._v("y,z")]),t._v(",例如 "),a("code",[t._v("x")]),t._v(" 和 "),a("code",[t._v("libraryName")]),t._v(" 是一致的，就将其收集起来。")]),t._v(" "),a("li",[t._v("判断是否使用：判断收集到的依赖是否被使用，如果有使用就调用 "),a("code",[t._v("importMethod")]),t._v(" 生成新的 "),a("code",[t._v("import")]),t._v(" 语句。")]),t._v(" "),a("li",[t._v("生成引入代码：根据配置项生成代码和样式的 "),a("code",[t._v("import")]),t._v(" 语句")])])])}),[],!1,null,null,null);s.default=n.exports}}]);