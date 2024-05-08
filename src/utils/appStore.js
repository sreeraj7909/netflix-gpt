import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import movieSlice from "./movieSlice";
import gptSLice from "./gptSLice";
import configSlice from "./configSlice";




const appStore=configureStore({

    reducer:{
        user:userSlice,
        movies:movieSlice,
        gpt:gptSLice,
        config:configSlice

    }

})


export default appStore;