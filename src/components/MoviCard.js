import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard=({poster_path})=>{
    if(!poster_path) return null
    return(
        <div className="w-32 pr-4 ">
            <img alt="movie-poster" src={POSTER_CDN_URL+poster_path}/>
        </div>
    )
}

export default MovieCard;