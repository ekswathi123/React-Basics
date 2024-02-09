import { useState } from "react"
function Scooter()
{
    const [scooter,setScooter]=useState(
        {
            color:"Red",
            brand:"Honda",
            Year:"2020",
        }
    )
    function update(){
        setScooter(prev=>{
            return{...prev,color:"Violet",brand:"Suzuki"}
        })
    }
    return<>
    <h1>My Scooter</h1>
    <p>Color: {scooter.color}</p>
    <p>Brand: {scooter.brand}</p>
    {/* <p>Model: {Model}</p> */}
    <p>Year: {scooter.Year}</p>
    <button onClick={update}>Change Color</button>
   </>
}
export default Scooter;