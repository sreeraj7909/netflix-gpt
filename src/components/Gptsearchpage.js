import Gptsearchbar from "./Gptsearchbar";
import { LOGIN_BG_LG } from "../utils/constants";

const GptSearchpage=()=>{
    return(
        <div>
            <div className='absolute -z-50'>
                <img alt='' src={LOGIN_BG_LG}/>
           </div>
            <Gptsearchbar/>
            Gpt search suggesions
        </div>
    )
}

export default GptSearchpage;