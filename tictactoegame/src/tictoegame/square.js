import React from "react";

const Square=(props)=>{
    return(
        <div
        onClick={props.click} 
        style={{
            border:"3px solid black",
            height:"100px",
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderColor:"brown"
        }}>
            <h5>{props.value}</h5>
        </div>
    );
}
export default Square