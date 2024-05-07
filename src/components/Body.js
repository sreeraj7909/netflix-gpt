
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useEffect} from "react"
import {auth} from "../utils/firebase"
import {useDispatch} from "react-redux"
import {addUser,removeUser} from "../utils/userSlice"



const Body = () => {
  const dispatch=useDispatch()
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browse/>
        }
    ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        // ...
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      } else {

        dispatch(removeUser())
        // User is signed out
        // ...
      }
    });
  },[])
   
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
