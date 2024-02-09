import { useEffect,useState } from "react";
function Timer(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        //check();
        //setCount(1);
       console.log('Screen Rendered!');
       //setTimeout(()=>{setCount(prev=> {return prev+1})},1000);
    });
    function update()
    {
         setCount((prev)=>{ return prev+1});
    }
    function check()
    {
        if(count>10)
        {
            setCount(1);
        }
    }
    return<>
    <h1>I have rendered {count} times</h1>
    <button onClick={update}>Render</button>
    </>


    
}
export default Timer;