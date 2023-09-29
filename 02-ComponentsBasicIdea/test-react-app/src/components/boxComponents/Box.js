import ShowHideButton from "./ShowHideButton"
import TextBox from "./TextBox"

export default function Box(){
    return (
       <div className="box">
          <ShowHideButton/>
          <TextBox/>
       </div>
    )
}