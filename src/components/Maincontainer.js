import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const Maincontainer = () => {

const movies=useSelector((store)=>store.movies.nowPlayingMovies)
console.log(movies)


if(!movies) return

const mainMovie=movies[1]
console.log(mainMovie)
const {original_title,overview,id}=mainMovie;


  return (
    <div>  
      <VideoTitle  title={original_title} overview={overview}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default Maincontainer
