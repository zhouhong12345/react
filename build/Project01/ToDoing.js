import React, { Component } from 'react'

export default class ToDoing extends Component {
    componentWillMount(){
        var a=JSON.parse(localStorage.getItem('key1'));
        var b=JSON.parse(localStorage.getItem('key2'));
        if(a!==null && b!==null){
            console.log(b);
            for(var i=0;i<a.length;i++){
                this.props.list.push(a[i]);
            }
            for(var i=0;i<b.length;i++){
                this.props.arr.push(b[i]);
            }
        }
    }
    render() {
        return (
            <div className='d'>
                <div className='done'><h1>正在进行</h1><div className='dtwo'>{this.props.list.length}</div></div>
                <ul className='u'>
                {
                    this.props.list.map((item,idx)=><li key={idx}>
                        <div style={{width:"400px",height:'25px',backgroundColor:'rgb(192,192,192)',margin:'3px'}}>
                            <button onClick={()=>{this.props.trans(idx,'list')}} style={{marginTop:'2px',float:'left',width:'20px',height:'20px'}}></button>
                            
                            <p style={{marginLeft:'10px',float:'left',width:'300px',marginBottom:'0px'}}>
                                {item}
                            </p>
                            <button style={{height:'25px',float:'right'}} onClick={()=>{this.props.del(idx,'list')}}>
                                删除
                            </button>
                        </div></li>)
                }
                </ul>
                <div className='done'><h1>已经完成</h1><div className='dtwo'>{this.props.arr.length}</div></div>
                <ul className='u'>
                {
                    this.props.arr.map((item,idx)=><li key={idx}>
                    <div style={{width:"400px",height:'25px',backgroundColor:'rgb(192,192,192)',margin:'3px'}}>
                        <button onClick={()=>{this.props.trans(idx,'arr')}} style={{marginTop:'2px',float:'left',width:'20px',height:'20px'}}></button>
                        
                        <p style={{marginLeft:'10px',float:'left',width:'300px',marginBottom:'0px'}}>
                            {item}
                        </p>
                        <button style={{height:'25px',float:'right'}} onClick={()=>{this.props.del(idx,'arr')}}>
                            删除
                        </button>
                    </div></li>)
                }
                </ul>
            </div>      
        )
    }
}
