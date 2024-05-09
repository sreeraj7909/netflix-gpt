import { useSelector } from "react-redux";
import MovieList from "./MovieLsit";

const Gptsearchsuggesion=()=>{
    const movies=useSelector((store)=>store.gpt?.searchMovies)
    console.log(movies)
    if(!movies) return null
    if(movies.length===0) return null;
    if(!movies[0].title) return "no movie found"
   
    return(
        <div className="m-4 p-4 bg-black bg-opacity-80 h-96">
            <MovieList title={movies[0].title}  movies={movies}/>
        </div>
    )
}
export default Gptsearchsuggesion;