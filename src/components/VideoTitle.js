const VideoTitle=({title,overview})=>{
    return(
        <div className="pt-[15%] px-32 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
         <h1 className="font-bold text-5xl w-1/2"> {title}   </h1>
         <p className="py-6 text-lg w-1/4">{overview}</p>
         <div>
            <button className="bg-white text-black px-10 py-4 text-xl  rounded-md m-3 hover:opacity-50">Play</button>
            <button className="bg-white text-black px-10 py-4 text-xl opacity-50 rounded-md">More info</button>

         </div>
        </div>
    )
}

export default VideoTitle;