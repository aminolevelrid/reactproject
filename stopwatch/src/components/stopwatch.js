import React,{useEffect,useState} from "react";

const Timer=()=>{
    const [count,setcount]=useState(0);
    const [button,setbutton]=useState(false);
    useEffect(()=>{
        let timer;
        if(button){
        timer=setInterval(()=>{setcount(count+1)},1000);}
        return function(){
            clearInterval(timer);        }
    },[count,button])
    return(
        <div>
        <h1>stopwatch</h1>
        <div className="current-time">
        <h4>current time is {count}</h4>
        <button onClick={()=>(setbutton(true))}>Start</button>
        <button onClick={()=>{setbutton(false)}}>Stop</button>
        </div>
        </div>
    );
};
export default Timer