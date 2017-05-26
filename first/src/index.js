/**
 * Created by Riky on 2017/5/26.
 */
import React from 'react';
import ReactDOM from 'react-dom';

//创建一个组件

const App =()=>{
    return(
        <h1> hello world !</h1>
    )
};

ReactDOM.render(<App/>, document.getElementById('root')); //渲染到DOM节点上