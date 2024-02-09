import React from "react";
class Col extends React.Component{
    constructor()
    {
        super();
        this.state={color:'Black'};
    }
    render(){
        return <>
          <h1>My Favourite Color Using Class is {this.state.color}</h1>
          <button onClick={()=>{this.setState({color:'Violet'})}}>Change Color</button>
        </>
    }
}
export default Col;