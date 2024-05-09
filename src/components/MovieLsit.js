import MovieCard from "./MoviCard";

const MovieList=({title,movies})=>{
    //console.log(movies)
    if(!title) return null

    return (
        <div className="px-6 text-white">
            <h1 className=" text-2xl italic py-4">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide ">  
                <div className="flex ">
                   {movies.map((movie)=> <MovieCard key={movie.id} poster_path={movie.poster_path} />)}
                </div>
            </div>
          
        </div>
    )
}

export default MovieList;