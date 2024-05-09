import Gptsearchbar from "./Gptsearchbar";
import { LOGIN_BG_LG } from "../utils/constants";
import Gptsearchsuggesion from "./Gptsearchduggesion";

const GptSearchpage=()=>{
    return(
        <>
        <div className='fixed -z-50'>
            <img className="h-screen object-cover md:w-screen" alt='' src={LOGIN_BG_LG}/>
        </div>
        <div className>
            <Gptsearchbar/>
            <Gptsearchsuggesion/>
        </div>
        </>
    )
}

export default GptSearchpage;