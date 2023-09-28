
import Actors from "./Actors";

export default function Movie(props){
    return (
        <div className="movieCard">
            <h2>{props.title}</h2>
            <p className="blue">{props.year}</p>
            <p className="blue">director: {props.director}</p>
            <Actors list = {props.actors}/>
        </div>
    );
}