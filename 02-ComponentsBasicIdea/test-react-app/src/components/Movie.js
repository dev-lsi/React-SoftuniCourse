
import Actors from "./Actors";
import DeleteMovieBtn from "./DeleteMovieBtn";
import OnDelete from "../App.js"

export default function Movie({id,title,year,director,actors}){
    return (
        <div className="movieCard">
            <h3>{title}</h3>
            <p className="blue">{year}</p>
            <p className="blue">director: {director}</p>
            <Actors list = {actors}/>
            <DeleteMovieBtn id={id}/>
        </div>
    );
}