import React, { Component } from 'react';

import TodoInput from './TodoInput';
import ToDoing from './ToDoing';

export default class TodoList extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            arr:[]
        }
    }
    addList=(e)=>{
        this.setState({
            list:[...this.state.list,e]
        },()=>{
            localStorage.setItem('key1',JSON.stringify(this.state.list));
        })
    }

    deleteList=(a,b)=>{
        if(b == 'list'){
            var list=[...this.state.list];
            var listDel=list.splice(a,1);
            this.setState({
                list:list
            },()=>{
                localStorage.setItem('key1',JSON.stringify(this.state.list));
                localStorage.setItem('key2',JSON.stringify(this.state.arr));
            })
            return listDel[0];
        }
        else if(b == 'arr'){
            var arr=[...this.state.arr];
            var arrDel=arr.splice(a,1);
            this.setState({
                arr:arr
            },()=>{
                localStorage.setItem('key2',JSON.stringify(this.state.arr))
                localStorage.setItem('key1',JSON.stringify(this.state.list))
            })
            return arrDel[0];
        }
    }
    transfer=(e,c)=>{
        if(c == 'list'){
            var listAdd=this.deleteList(e,c);
            this.setState({
                arr:[...this.state.arr,listAdd]
            })
        }
        else if(c =='arr'){
            var arrAdd=this.deleteList(e,c);
            this.setState({
                list:[...this.state.list,arrAdd]
            })
        }
    }
    render() {
        return (
            <div>
                <TodoInput add={this.addList}/>
                <ToDoing number={this.state.num} trans={this.transfer} del={this.deleteList} list={this.state.list} arr={this.state.arr}/>
            </div>
        )
    }
}
