import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovie } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"



const useGetNowPlayingMovies=()=>{

    const dispatch=useDispatch()


    const getNoWPlayingMovies=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json=await data.json()
    console.log(json.results)
    dispatch(addNowPlayingMovie(json.results))
}

useEffect(()=>{
    getNoWPlayingMovies()
},[])
}

export default useGetNowPlayingMovies;