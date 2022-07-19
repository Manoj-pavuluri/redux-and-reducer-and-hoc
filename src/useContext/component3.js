import React,{useContext} from 'react'
import UserContext from '.'


export default function Component3(){
    const userdata = useContext(UserContext)
    return(
        <div>
            Hello3{userdata}
        </div>
    )
}