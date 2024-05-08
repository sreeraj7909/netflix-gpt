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
        <div className="absolute px-20 py-2 bg-gradient-to-b from-black z-40 w-full flex justify-between">
            <div>
                <img className="w-48" alt="logo" src={LOGO_URL}/>
            </div>
           {user && <div className="mx-10 flex items-center ">
            {gptpage && <select className="p-2  m-2 mx-8 bg-slate-600 rounded-lg" onChange={handlelanguageChange}>
              {SUPPORTED_LANGUAGES.map((langu)=><option className="" key={langu.identifire} value={langu.identifire}>{langu.name}</option>) }
            </select>}
              
            <button className="px-5 py-3  bg-purple-700 rounded-lg text-white" onClick={handleGptSearch}>{gptpage ?"Home":"GPTSearch"}</button>
                  <img className="w-12 h-12 mx-10 " alt="user icon" src={USER_AVTR}></img>
                  <button onClick={handleSignout} className="bg-red-700 rounded-lg font-bold p-2  h-10 text-white w-full">Sign out</button>
                
            </div>}
           
          
        </div>
       
    )
}

export default Header;
