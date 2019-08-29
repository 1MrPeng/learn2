//1.这两个导入时名称必须这么写
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'    //把创建好的 组件 和 虚拟DOM 渲染到页面上展示

//2.创建虚拟DOM元素
//参数1：创建元素的类型P,div,span
//参数2：是一个对象或null,表示 当前这个DOM元素的 属性
//参数3：子节点（包括 其他 虚拟DOM 获取 文本子节点）
//参数n: 其他子节点
const myH1 = React.createElement('h1',{
    id: 'myH1',
    title: 'this is a h1'
},'这是一个大大的H1')

const mydiv = React.createElement('div',null,'这是一个div元素',myH1)

//渲染 页面上的 DOM结构，最好的方式，就是写 html 代码

const mytest = <div>aaa</div>


//3.使用ReactDOM
//参数1：要渲染的那个虚拟DOM
//参数2：指定页面上的容器（只能放一个DOM元素，不是选择器）

ReactDOM.render(mydiv,document.getElementById('app'))