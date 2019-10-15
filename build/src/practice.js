import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './indexone';

var obj={
    type:'div',
    props:{
        id:'box',
        class:'box',
        children:['hello',{
            type:'h1',
            props:{
                id:'boxone',
                class:'boxone',
                children:['react']
            }
        }]
    }
}
ReactDOM.render(<first/>,document.getElementById('first'));


