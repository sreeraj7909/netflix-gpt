import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const Maincontainer = () => {

const movies=useSelector((store)=>store.movies.nowPlayingMovies)



if(!movies) return

const mainMovie=movies[4]

const {original_title,overview,id}=mainMovie;


  return (
    <div className='md:pt-0 pt-[30%] bg-black'>  
      <VideoTitle  title={original_title} overview={overview}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default Maincontainer
