
import React from 'react'   //创建组件、虚拟DOM元素，生命周期
import ReactDOM from 'react-dom'    //把创建好的 组件 和 虚拟DOM 渲染到页面上展示

let a = 10  
let str = '你好，中国'  
let bol = true
let title = '999'

const h1 = <h1>哈哈哈</h1>
const arr = [
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]
const strArr = ['毛利兰','柯南','小五郎','孙丞浩']
//方案1，定义一个空数组，存放新的名称 标签。forEach无返回值
const nameArr = []
strArr.forEach(item=>{
    const temp = <h5 key={item}>{item}</h5>
    nameArr.push(temp)
})
//方案2：数组的map方法，返回操作后的新数组
//注意：react中需要把key 添加给 forEach 和 map 和for循环直接控制的元素


//使用{}写js变量,当我们需要在JSX控制的区域内，写js表达式，则需要{}
ReactDOM.render(<div>
    {a+2}
    <hr />
    {str}
    <hr />
    {bol ? '条件为真' : '假'}
    <hr />
    <p title={title}>这是p标签</p>
    {h1}
    {/* {arr} */}
    <hr />
    {nameArr}
    <hr />
    {strArr.map(item=> <h3 key={item}>{item}</h3>)}

    <p className="active">p标签</p>
    <label htmlFor="id">label</label>
</div>,document.getElementById('app'))