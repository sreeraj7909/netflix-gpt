
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider,createHashRouter} from "react-router-dom"




const Body = () => {
 
    const appRouter=createHashRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Browse/>
        }
    ])

 
   
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
