import { useState } from "react";

function Form(){
    /*const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");*/
    const [Inputs,setInputs]=useState({phone:"+91",email:"@gmail.com",country:"india"});
    
    //console.log(name);
    function handlesubmit(e)
    {
        e.preventDefault();
        console.log(Inputs);
    }
    function handle(e)
    {
        const name=e.target.name;
        const value=e.target.value;
        setInputs(prev=>{return{...prev,[name]:value}});
    }
    return <form onSubmit={handlesubmit}>
        <label>Enter your name:<input type="text" name="name" onChange={handle}/></label><br/>
        <label>Enter your age:<input type="text" name="age" onChange={handle}/></label><br/>
        <label>Enter your email:<input type="text" value={Inputs.phone} name="phone" onChange={handle}/></label><br/>
        <label>Enter your email:<input type="text" value={Inputs.email} name="email" onChange={handle}/></label><br/>
        <label>Enter your country:<select name="country" value={Inputs.country} onChange={handle}>
            <option value="">Select</option>
            <option value="australia">Australia</option>
            <option value="england">England</option>
            <option value="india">India</option>
            </select></label>

        <input type="submit" value="submit form"/>
    </form>
}
export default Form;