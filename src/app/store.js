import {configureStore} from '@reduxjs/toolkit'
import counterReducers  from '../features/couter/counterSlice'



export const store = configureStore({
    reducer:{
        counter1 : counterReducers
    }
 
})