import React, { useState, useReducer } from 'react'

const Reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + action.count
        case "decrement":
            return state - action.count
        default:
            break;
    }

}


const HoverCounter = () => {

    const [count, dispatch] = useReducer(Reducer, 0)


    const OnclickButton = () => {
        dispatch({type:"increment",count:2})
    }
    const OnclickButton1 = () => {
        dispatch({type:"decrement",count:2})
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => OnclickButton()}>+</button>
            <button onClick={() => OnclickButton1()}>-</button>
        </div>
    )

}

export default HoverCounter