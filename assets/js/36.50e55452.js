(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{444:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"组件库之按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件库之按需加载"}},[s._v("#")]),s._v(" 组件库之按需加载")]),s._v(" "),a("h2",{attrs:{id:"组件库按需加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件库按需加载"}},[s._v("#")]),s._v(" 组件库按需加载")]),s._v(" "),a("p",[s._v("目前按需加载有两种方式实现。")]),s._v(" "),a("ul",[a("li",[s._v("使用"),a("code",[s._v("babel-plugin-import")]),s._v("插件来自动按需引入")]),s._v(" "),a("li",[s._v("提供"),a("code",[s._v("es module")]),s._v("版本，开启"),a("code",[s._v("tree shaking")])])]),s._v(" "),a("h3",{attrs:{id:"babel-plugin-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-import"}},[s._v("#")]),s._v(" babel-plugin-import")]),s._v(" "),a("p",[a("code",[s._v("babel-plugin-import")]),s._v("是"),a("code",[s._v("ant-design")]),s._v("团队出的一个"),a("code",[s._v("babel")]),s._v("插件，主要用于模块的按需加载。其原理就是将直接引入的方式通过"),a("code",[s._v("babel")]),s._v("转化成按需引入的方式。如果"),a("code",[s._v("css")]),s._v("也需要按需加载，也会注入"),a("code",[s._v("css")]),s._v("引用代码。")]),s._v(" "),a("p",[s._v("例如")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Button "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'antd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("转换成")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Button "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'antd/es/button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'antd/es/button/style'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[s._v("#")]),s._v(" tree shaking")]),s._v(" "),a("p",[s._v("如果组件库提供了"),a("code",[s._v("es module")]),s._v("版本，并开启了"),a("code",[s._v("tree shaking")]),s._v("，那么不需要"),a("code",[s._v("babel-plugin-import")]),s._v("，也可以达到按需加载的目的，这个方法只针对于"),a("code",[s._v("js")]),s._v("，对于样式的按需加载仍需要手动引入。 当然"),a("code",[s._v("babel-plugin-import")]),s._v("和"),a("code",[s._v("tree shaking")]),s._v(" 也可以并存使用。但大部分情况并存使用与单独使用体积差距不是很大。\n例如：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Button "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'antd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'antd/es/button/style'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("webpack")]),s._v("可以通过在"),a("code",[s._v("package.json")]),s._v("设置"),a("code",[s._v("sideEffects: false")]),s._v(",开启"),a("code",[s._v("tree shaking")]),s._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);