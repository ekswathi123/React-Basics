import {useState} from "react"
function List()
{
    const [list,setlist]=useState([])
    const [count,setCount]=useState(1)
    function update()
    {
        const itemName='Item'+count;
        setlist((prev)=>{return [...prev,itemName]});
        setCount(prev=> {return prev+1});
    }
    return <>
              <h1>List</h1>
              <button onClick={update}>Update</button>
              <ul>{
                    list.map((el,index)=> <li key={index}>{el}</li>)
                }
                  
              </ul>
    </>
}
export default List;