import useGetTrailer from "../hooks/useGetTrailer"
import { useSelector } from "react-redux"

const VideoBackground = ({id}) => {

     useGetTrailer(id)
   
    //fetching the trailer videos and updating the store
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo)
    
    // const trailerKey = trailerVideo[0].key;
    // console.log(trailerKey);
    
   
    // console.log(trailerVideo)
    // console.log(trailerVideo[0].key)

    
    
  return (
    <div>
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key}
 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" >

      </iframe>
    </div>
  )
}

export default VideoBackground
