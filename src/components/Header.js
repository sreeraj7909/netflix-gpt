import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL, USER_AVTR } from "../utils/constants";
import {auth} from "../utils/firebase"
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {addUser} from "../utils/userSlice"
import { toggleGptSearchView } from "../utils/gptSLice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

import { changeLanguage } from "../utils/configSlice";
const Header=()=>{
    const user=useSelector(store=>store.user)
    const gptpage=useSelector((store)=>store.gpt.showGptSearch)
    
   
    const navigate=useNavigate()
    const dispatch=useDispatch()
    

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName} = user;
            navigate("/browser")

            // ...
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          } else {
    
            dispatch(removeUser())
            // User is signed out
            // ...
            navigate("/")
          }
        });
        //Unsubscribe when the component unmount
        return ()=>{
            unsubscribe()
        }
      },[])

    const handleSignout=()=>{
        signOut(auth).then(() => {
           
           

            
          }).catch((error) => {
            // An error happened.
            navigate('/error')
          });
    }

    const handleGptSearch=()=>{
      //Togglegptsearch
      dispatch(toggleGptSearchView())
    }
    const handlelanguageChange=(e)=>{
      console.log(e.target.value)
      dispatch(changeLanguage(e.target.value))
    }
    return (
        <div className="absolute px-20 py-2 bg-gradient-to-b from-black z-40 w-full flex flex-col md:flex-row md:justify-between">
            <div className="mx-auto md:mx-0">
                <img className="w-48" alt="logo" src={LOGO_URL}/>
            </div>
           {user && <div className="md:mx-10 flex items-center w-auto grid-cols-12 md:mt-0 mt-3">
            {gptpage && <select className=" p-2  m-4 md:mx-8 w-22 -ml-7 bg-slate-600 rounded-lg col-span-3" onChange={handlelanguageChange}>
              {SUPPORTED_LANGUAGES.map((langu)=><option className="" key={langu.identifire} value={langu.identifire}>{langu.name}</option>) }
            </select>}
              
            <button className="md:px-5 md:py-3 md:mx-0 col-span-3 px-3 py-2 mx-2  bg-purple-700 rounded-lg text-white" onClick={handleGptSearch}>{gptpage ?"Home":"MovieSearch"}</button>
                  <img className="md:w-12 md:h-12  md:mx-10 w-10 h-10 mx-8 col-span-3 " alt="user icon" src={USER_AVTR}></img>
                  <button onClick={handleSignout} className="bg-red-700 rounded-lg font-bold p-1 h-10 col-span-3  text-white md:w-full">Signout</button>
                
            </div>}
           
          
        </div>
       
    )
}

export default Header;
