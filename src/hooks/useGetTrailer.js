import { useDispatch} from "react-redux"
import { addTrailer } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"


const useGetTrailer=(id)=>{
    
    const dispatch=useDispatch()
   

    const getMovieTrailer=async ()=>{

        const data=await fetch('https://api.themoviedb.org/3/movie/'+id+"/videos?language=en-US", API_OPTIONS)
        const json= await data.json()
        console.log(json)
        const filterData=json.results.filter((video)=>video.name="Trailer")
        const trailer=filterData.length ? filterData[0] :json.results[0]
        console.log(trailer)
        dispatch(addTrailer(trailer))
    }
    useEffect(()=>{
      getMovieTrailer()
    },[])
}

export default useGetTrailer;