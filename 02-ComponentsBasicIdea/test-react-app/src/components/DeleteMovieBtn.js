
export default function DeleteMovieBtn(id){

    return(

        <button className="delete-button" onClick={onDelete(id)}>Delete Movie</button>
    )
}