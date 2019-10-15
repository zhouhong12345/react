import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//mport ShowTime from './ShowTime';////(ShowTime.js)默认导出直接写名ShowTime
//import {ShowTime} from './ShowTime';//命名导出需写花括号{ShowTime}

import Todolist from './Todolist/Todolist';

import Request from './Request';

//组件交互
//父组件-->子组件：调用时在子组件上添加属性
//在子组件

// RactDOM.render(<Hello word='react'/>,document.getElementById('root'));

// ReactDOM.render(<ShowTime word='react'/>,document.getElementById('root'));

//ReactDOM.render(<Todolist/>,document.getElementById('root'));


ReactDOM.render(<Request/>,document.getElementById('root'));


// 函数定义组件(无生命周期函数)
//当只是渲染结构时
// function Todo(props){
//     return (
//         <div>
//             <h1>todo</h1>
//             <ul>
//                 {/* 循环渲染 */}
//                 {
//                     props.list.map(function(item,index){
//                         return <li key={item}>{item}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }
// function Todo(props){
//     return (
//         <div>
//             {/* 条件渲染 */}
//             {props.list.length>=6?<h1>todo</h1>:''}
//             {props.list.length>=5 && <h1>todo</h1>}
//             <ul>
//                 {/* 循环渲染 */}
//                 {
//                     props.list.map(
//                         (item,index)=> index%2 === 0&&<li key={item}>{item}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
// var item = [1,2,3,4,5];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));

// react元素创建后不可改变
// function tick(){
//     var e = <div>
//                 <p>当前时间</p>
//                 <p>当前时间</p>
//                 <h1>{new Date().toLocaleString()}</h1>;
//             </div>
//     ReactDOM.render(e,document.getElementById('root'));
// }
// tick();
// setInterval(tick,1000);

//类定义组件
// class Hello extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             // str:'12345'
//             time:new Date().toLocaleString()
//         }
//         // setInterval(()=>{
//         //     this.setState({
//         //        time:new Date().toLocaleString()
//         //     })
//         // },1000)
//         console.log('constructor',this.props.word)

//     }
//     componentDidMount(){
//         console.log('componentDidMount');
//         setTimeout(()=>{
//             console.log(1)
//             this.setState({
//                 time:new Date().toLocaleString()
//             })
//         },1000)
//     }

//     //加一步判断
//     shouldComponentUpdate(){
//         return true//false 定时器不更新
//     }
//     getSnapshotBeforeUpdate(){
//         console.log('getsnapshot');
//         return null
//     }
//     componentDidUpdate(){
//         console.log('didupdate');
//     }
//     render(){
//         console.log('render');
//         // setInterval(()=>{
//         //     console.log(1)
//         //     this.setState({
//         //         time:new Date().toLocaleString()
//         //     })
//         // },1000)
//         //每次setstate就render一次
//         //挪到这也可以
//         return (
//             <Fragment>
//                 {/* <div>{this.state.str}</div> */}
//                 <div>{this.state.time}</div>
//                 <div>hello{this.props.word}</div>
//             </Fragment>
//             //return只能返回一个
//         )
//     }
// }
// ReactDOM.render(<Hello word='react'/>,document.getElementById('root'));

//jsx表达式会被react转换成改一个对象
// var ele=React.createElement(
//     'div',
//     {id:'box'},
//     'hello',
//     React.createElement(
//         'h1',
//         {id:'h'},
//         'react'
//     )
// );
// console.log(ele);

// var obj={
//     type:'h1',
//     props:{          //div的结点
//         id:'box',
//         class:'box',
//         children:['hello',{
//             type:'h1',
//             props:{
//                 id:'box',
//                 class:'box',
//                 children:['react']
//             }
//         }]
//     }
// }
// function render(obj,container){
//     var {type,props}=obj;
//     //var ele=document.createElement(obj.type);
//     var ele=document.createElement(type);
//     // ele.id=obj.props.id;
//     // ele.innerHTML=obj.props.children[0];
//     for(var item in props){
//         if(item ==='class'){
//             ele.className=props[item];
//         }
//         else if(item === 'children'){
//             for(var i=0;i<props[item].length;i++){
//                 var txt=document.createTextNode(props[item][i]);
//                 ele.appendChild(txt);
//             }
//         }
//         else{
//             ele[item] =props[item];
//         }
//     }
//     container.appendChild(ele);
// }

// 加载html文件、浏览器解析html生成DOM树
// link加载css文件，解析css规则、和DOM树结合生成render tree（渲染树）、浏览器渲染引擎渲染render tree

//页面回流(重排):内容改变，大小改变，结构改变（页面重新渲染一遍）（需要尽量减少页面的回流）
//页面重绘:把字体颜色、背景颜色等样式改变

//1、 node.offsetLeft、node.offserWidth等慎用//每次获取最新值页面都会回流一次

//2、
// var root=document.getElementById('root');
// var width=root.offsetWidth;
// setInterval(function(){
//     width+=1;//减少了回流
//     root.style.width=width+'px';//width取最终值
// },100)

// 3、display、width、height、font-size等会引起页面回流
// document.body.style.width='100px';
// document.body.style.height='100px';//每赋值一次，页面回流一次
// 声明一个css的一个类
// .change{
//     width:100px;
//     height:100px;
// }
// document.body.className='change';


// console.time('a');
// //页面回流一次
// var str='';
// for(var i=0;i<1000;i++){
//     str+="<li>"+i+"</li>";
// }
// document.body.innerHTML=str;

//页面回流多次
// for(var i=0;i<1000;i++){
//     document.body.innerHTML+="<li>"+i+"</li>";
// }
// console.timeEnd('a');

// var str='<h1>hello</h1>'+'';
// ele.innerHTML=str;


// function render(obj,container){
//     var {type,props}=obj;
//     //文档碎片
//     var fr=document.createDocumentFragment();
//     //var ele=document.createElement(obj.type);
//     var ele=document.createElement(type);
//     // ele.id=obj.props.id;
//     // ele.innerHTML=obj.props.children[0];
//     for(var item in props){
//         if(item ==='class'){
//             ele.className=props[item];
//         }
//         else if(item === 'children'){
//             for(var i=0;i<props[item].length;i++){
//                 if(typeof props[item][i] ==='object'){
//                     render(props[item][i],ele);
//                 }
//                 else{
//                     var txt=document.createTextNode(props[item][i]);
//                     ele.appendChild(txt);
//                 }
//             }
//         }
//         else{
//             ele[item] =props[item];
//         }
//     }
//     fr.appendChild(ele);
//     container.appendChild(fr);
// }

//render(obj, document.getElementById('root'));

//var e=<h1>hello</h1>;
// ReactDOM.render(ele, document.getElementById('root'));


