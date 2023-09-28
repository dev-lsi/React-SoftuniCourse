import { useState } from "react";



export default function Button(){

    if(!localStorage.getItem('base')){
        localStorage.setItem('base',0);
    }
    
    const[increment,setIncrement] = useState(Number(localStorage.getItem('base')));
    
    function change(){
        localStorage.setItem('base',increment)
        return(setIncrement(state=>state+1))
    }
    
   
    return (
        <div>
            <button className ="butt" onClick={()=>change()}>
                {increment}
            </button>
            <p>{increment}</p>

        </div>
        
    )

}