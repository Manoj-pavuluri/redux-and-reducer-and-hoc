import React, { useState } from 'react';


const UpdateComponent = (OrginalComponent) => {
    return class Hello extends React.Component{

    state = {
        count :0
    }

     onClickButton = () =>{
        this.setState({count: this.state.count+1})
    }

        render(){
            return <OrginalComponent name="manoj" onClickButton1={this.onClickButton} count1={this.state.count}/>
        }
    }    
}

export default UpdateComponent;