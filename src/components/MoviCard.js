import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard=({poster_path})=>{
    return(
        <div className="w-40 pr-4 ">
            <img alt="movie-poster" src={POSTER_CDN_URL+poster_path}/>
        </div>
    )
}

export default MovieCard;