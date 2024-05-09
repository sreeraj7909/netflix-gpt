const VideoTitle=({title,overview})=>{
    return(
        <div className="md:pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[20%]">
         <h1 className="font-bold text-xl md:text-5xl md:w-1/2 w-1/2 -mx-16 mt-8 md:-mx-0 md:mt-0"> {title}   </h1>
         <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
         <div className=" -mx-20 md:-mx-2">
            <button className="bg-white px-6 py-2 text-black md:px-10 md:py-4 md:text-xl  rounded-md m-3 hover:opacity-50">Play</button>
            <button className="bg-white px-6 py-2 text-black md:px-10 md:py-4 md:text-xl opacity-50 rounded-md">More info</button>
         </div>
        </div>
    )
}

export default VideoTitle;