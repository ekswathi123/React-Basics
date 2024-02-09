import Hi from './Hi';
import Apple from './Apple';

function Hello()
{
    const names={fn:'Swathi',ln:'E'};
    //const label={names:'xyz',nickname:'abc'};
    ///const text={taste:'sweet', quality:'good'};
    //const text={};
    const nameList=[{fn:'Swathi',ln:'Karthikeyan'},
    {fn:'Swathi',ln:'K'},
    {fn:'Swa',ln:'E K'},
    ]; 
    //const personList=[{names:'Magisha',nickname:'Magi'},
//{names:'Sneha',nickname:'Sne'},];
    const num=[1,2,3,4,5,6];
    return(
        <>
        {/* <h2>Hello</h2> */}
        <ul>
            {nameList.map((names)=><li key={names.fn}><Hi names={names}/></li>)}
        </ul>
        <ul>
          {num.map((e)=><li key={index}>{e}</li>)}
        </ul>
        {/* <Apple text={text}/> */}
        </>
    );
}
export default Hello;