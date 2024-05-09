import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovie } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"



const useGetNowPlayingMovies=()=>{
    const nowPlaying=useSelector((store)=>store.movies.nowPlayingMovies)
    

    const dispatch=useDispatch()


    const getNoWPlayingMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json=await data.json()
    
    dispatch(addNowPlayingMovie(json.results))
}

useEffect(()=>{
   !nowPlaying && getNoWPlayingMovies()
},[])
}

export default useGetNowPlayingMovies;