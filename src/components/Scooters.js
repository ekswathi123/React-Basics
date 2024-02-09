import React from "react";
class Scooters extends React.Component{
    constructor()
    {
        super();
        this.state={color:'Red',brand:'Honda',}
    }
    
    render()
    {
        return <>
           <h1>My Scooter using class</h1>
           <p>Color: {this.state.color}</p>
           <p>Brand: {this.state.brand}</p>
           <button onClick={()=>{this.setState(prev=>{return{...prev,color:'violet'}})}}>Change State</button>
           {/* <p>Year: {this.state.Year}</p> */}
        </>
    }
        
}
export default Scooters;