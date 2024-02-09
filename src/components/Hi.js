function Hi(props)
{  
    const{names}=props;
    
    const{fn,ln}=names;
    const text=`Hi I am ${fn} ${ln}`;
    return(
    
        <h1>{text}</h1>
        
    );
}
export default Hi;