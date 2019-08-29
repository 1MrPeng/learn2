//1.这两个导入时名称必须这么写
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'    //把创建好的 组件 和 虚拟DOM 渲染到页面上展示

//2.创建虚拟DOM元素
//什么是虚拟DOM：用JS对象形式，来表示DOM元素和DOM之间的嵌套关系
// const mydiv = React.createElement('div',{id: 'mydiv'},'这是一个div元素')

//html是最优秀的标记语言
//安装babel来转换JS中的html标签
//     cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
//     cnpm i babel-preset-env babel-preset-stage-0 babel-preset-react -D
//在JS中，混合写入类似于HTML语法，叫做JSX语法，符合XML规范的JS。本质在运行时，被转换成了React.createElement
const mydiv = <div id="mydiv" title="我是div aaa">
    我是div
    <p>我是p标签</p>
</div>

//3.调用render函数渲染
ReactDOM.render(mydiv,document.getElementById('app'))