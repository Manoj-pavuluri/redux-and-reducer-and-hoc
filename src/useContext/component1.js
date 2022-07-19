import React from 'react'
import Component2 from './component2'
import UserContext from './index'

export default function Component1(){
    return(
        <div>
           <UserContext.Provider value="manoj">
            <div>Hello1</div>
            <Component2 />
            </UserContext.Provider>
        </div>
    )
}