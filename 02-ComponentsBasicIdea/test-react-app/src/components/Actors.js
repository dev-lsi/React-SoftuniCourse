export default function Actors(props){
    
    return(
        <div className="actorsList">
          {(props.list).map(a=><p className="actorsParagraph" >{a}</p>)}
        </div>
     
    )
}