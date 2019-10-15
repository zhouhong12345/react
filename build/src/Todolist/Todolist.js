import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import { stat } from 'fs';


export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            todo:[1,2,3]
        }
        // var arr=[1,2,{a:100}];
        //var b=[...arr];//浅拷贝后数组不一样但是引用还是一样的对象a值变为200
        // var b=JSON.parse(JSON.stringify(arr));//深拷贝？？
        // b[2].a=200;
        // console.log(arr);

        //对象的拷贝
    //     var a={a:100};
    //     //var b={a:200};
    //    // var o=Object.assign(a,b);
    //    //var o=Object.assign({},a,b);//出现{}新的对象
    //     var o=Object.assign({},a);//拷贝对象
    //     console.log(o);
    //     console.log(o===a);

        var a={a:100,b:100};
        Object.keys(a).forEach((item)=>{ //foreach遍历对象
            console.log(item);
            console.log(a[item]);
        })

        // for(var item in a){   //for循环遍历对象,但此方法不太好,尽量不用
        //     console.log(a);
        // }


    }
    //数组添加元素
    addItem=(msg)=>{
        // this.state.todo.push(msg)
        // console.log(this.state.todo);

        //区别：用setState会使render改变,而用state只会使数组改变

        this.setState({
            todo:[...this.state.todo,msg]
        })
        //console.log(msg)
    }
    //数组删除元素
    deleteItem=(a)=>{
        //this.state.todo.splice(a,1);不要写
        //深拷贝\浅拷贝
        //状态(state)
        //1.不要直接改变、处理状态
        var todo=[...this.state.todo];
        todo.splice(a,1);
        //2.setState是异步的
        this.setState(
            {todo:todo}
            )
        //this.setState((state,props)=>({todo:state.todo+1}))
        this.setState({todo:this.state.todo+1})
        this.setState({
            todo:this.state.todo
        })
        console.log(a);
    }
    render() {
        
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo} delete={this.deleteItem}/>
            </div>
        )
    }
}
