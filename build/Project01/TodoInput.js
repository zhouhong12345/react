import React, { Component } from 'react'

export default class biaodan extends Component {
    constructor(){
        super();
        this.state={
            input:''
        }
    }
    handleInput=(e)=>{
        if(e.keyCode===13){
            this.props.add(e.target.value)
        }
    }
    InputChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div> 
                    <input className="In" type="text" name='input'  onChange={this.InputChange} value={this.state.input} onKeyDown={this.handleInput} placeholder='添加ToDo'/>
            </div>
        )
    }
}
