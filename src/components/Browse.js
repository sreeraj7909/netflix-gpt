
import { useSelector } from "react-redux";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import GptSearch from "./Gptsearchpage";
import Header from "./Header"
import Maincontainer from "./Maincontainer";
import Subcontainer from "./Subcontainer";




const Browse=()=>{
    const showGptSerch=useSelector((store)=>store.gpt.showGptSearch)
    useGetNowPlayingMovies()
   
    return (
        <div>
            <Header/>
            {
            showGptSerch ? (<GptSearch/> ): (<><Maincontainer/>
            <Subcontainer/> </>)}
            
           
            {/*
              -Maincontainer
                 -bagground video
                 -video info
              -subcontainer
                  -videolist*n
                  -video card
            */} 
        </div>
    )
}

export default Browse;