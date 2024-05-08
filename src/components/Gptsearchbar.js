
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";


const Gptsearchbar=()=>{
    const languageKey=useSelector((store)=>store.config.lang)
   
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input className="p-4 m-4  rounded-lg col-span-9" type="text" placeholder={lang[languageKey].gptSearch_placeholder}></input>
                <button className="py-4 px-3 m-4 bg-red-700 text-white rounded-lg col-span-3">{lang[languageKey].search}</button>
            </form>
        </div>
    )
}

export default Gptsearchbar;