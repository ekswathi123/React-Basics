import { useState } from "react";
function Color()
{
    //let color='Black';
    const [color,set]=useState('Red');
    return(
        <>
        <h1>My Favourite Color is {color}</h1>
        <button onClick={()=>set('Violet')}>Change Color</button>
        </>
    )
}
export default Color;