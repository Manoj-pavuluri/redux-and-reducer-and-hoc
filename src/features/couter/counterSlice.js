import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count : 0
}

export const counterSlice =  createSlice({
    name:'increment',
    initialState,
    reducers:{
        Increment : (state,action)=> {
            state.count += action.payload
        },
        Decrement : (state,action)=> {
           state.count -= action.payload
        }
    }
})


export const {Increment,Decrement} = counterSlice.actions

export default counterSlice.reducer