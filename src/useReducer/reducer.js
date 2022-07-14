import React,{useState,useReducer} from 'react'

const Reducer = (state,action) =>{
        return state+1
}


const HoverCounter = () =>{

    const [count,dispatch] = useReducer(Reducer,0)


    const OnclickButton = () =>{
        dispatch()
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>OnclickButton()}>+</button>
        </div>
    )

}

export default HoverCounter