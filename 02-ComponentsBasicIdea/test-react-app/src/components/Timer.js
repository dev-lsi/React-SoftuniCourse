import { useState } from "react"



export default function Timer(props) {
   
   const [seconds,setSeconds] = useState(props.start);


            setTimeout(()=>{
                setSeconds(
                    (state)=>state + 1
            )},1000)

   return(
    <div className="timer">Time: {seconds}</div>
   )
}