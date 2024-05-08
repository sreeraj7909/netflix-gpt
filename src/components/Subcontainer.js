import { useSelector } from "react-redux";
import MovieList from "./MovieLsit";

const Subcontainer=()=>{

    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
    
    return (
        movies &&(
        <div className=" bg-black">

           <div className="-mt-72 px-16 relative z-20">
            <MovieList title={"Now Playing"} movies={movies}/>
            <MovieList title={"Popular"} movies={movies}/>
            <MovieList title={"Trending"} movies={movies}/>
            <MovieList title={"Documentaion"} movies={movies}/>
            <MovieList title={"Kids corner"} movies={movies}/>
            </div>
           
           
           
           {/*

           Movielist-popular
              -movieCard*n
           MovieList-trending 
           MovieList-Documentry

           */}
        </div>)
    )
}

export default Subcontainer;

