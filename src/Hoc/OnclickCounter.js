import React,{ useState } from "react";
import UpdateComponent from "./Hoc";


const OnclickCounter=(props)=>{



    return(
        <div>
            <p>{props.name}{props.count1}</p>
            <button onClick={props.onClickButton1}>+</button>
        </div>
    )
}

export default UpdateComponent(OnclickCounter)