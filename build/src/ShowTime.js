import React,{Component,Fragment} from 'react';

//类定义组件
//export default class Hello extends Component{
class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state={
            // str:'12345'
            time:new Date().toLocaleString()
        }
        // setInterval(()=>{
        //     this.setState({
        //        time:new Date().toLocaleString()
        //     })
        // },1000)
        //this.handleClick=this.handleClick.bind(this);//bind绑定this
        console.log('constructor',this.props.word)

    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1)
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }

    //加一步判断
    shouldComponentUpdate(){
        return true//false 定时器不更新
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
        return null
    }
    componentDidUpdate(){
        console.log('didupdate');
    }
    handleClick=(num,e)=>{
        //console.log(this);//箭头函数绑定this
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
    }
    render(){
        console.log('render');
        // setInterval(()=>{
        //     console.log(1)
        //     this.setState({
        //         time:new Date().toLocaleString()
        //     })
        // },1000)
        //每次setstate就render一次
        //挪到这也可以
        return (
            <Fragment>
                {/* <div>{this.state.str}</div> */}
                <div onClick={(ev)=>this.handleClick(1,ev)}>{this.state.time}</div>
                {/* 还可以写成<div onClick={this.handleClick}>{this.state.time}</div> */}
                {/* 也还可以这么写<div onClick={()=>{
                    console.log(1);
                }}>
                    {this.state.time}
                </div> */}

                <div onClick={this.divClick.bind(this,333)}>hello{this.props.word}</div>
            </Fragment>
            //return只能返回一个
        );
    }
}

//默认导出,只能导出一次
//export default ShowTime;//只能写一个

//命名导出,可以写多个export
//export {ShowTime};


