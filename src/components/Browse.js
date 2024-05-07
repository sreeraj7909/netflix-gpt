
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import Header from "./Header"
import Maincontainer from "./Maincontainer";
import Subcontainer from "./Subcontainer";



const Browse=()=>{
    useGetNowPlayingMovies()
   
    return (
        <div>
            <Header/>
            <Maincontainer/>
            <Subcontainer/>
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