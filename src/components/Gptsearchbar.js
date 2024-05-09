
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { tmdbMovieResults } from "../utils/gptSLice";



const Gptsearchbar=()=>{
    const dispatch=useDispatch()
    const languageKey=useSelector((store)=>store.config.lang)
    const searchText=useRef(null)

    const searchMovie=async(movie)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
        return json.results

    }
    const handlegptSearchClick=async ()=>{
        console.log(searchText.current.value)    
        const data=searchMovie(searchText.current.value)
        const tmdbResult=await data
        console.log(tmdbResult)
        dispatch(tmdbMovieResults(tmdbResult))
    }
    
   
    return(
        <div className="pt-[40%] md:pt-[10%] flex justify-center">
            <form className="bg-black w-full md:w-1/2 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} className="p-4 m-4  rounded-lg col-span-9" type="text" placeholder={lang[languageKey].gptSearch_placeholder}></input>
                <button className="py-4 px-3 m-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handlegptSearchClick}>{lang[languageKey].search}</button>
            </form>
        </div>
    )
}

export default Gptsearchbar;