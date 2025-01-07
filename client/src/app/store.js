import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import rootReducer from "./rootReducer";
import { authApi } from "@/features/api/authApi";
//  authRedfucer ki jagah koi bhi nam de skte hai


// configure store is a normal function in which we pass object 

// in context of amazon when we click on add to cart so a dispatch action happen which call a reducer fn which goes into card then that call a selector fun which then display you cart value increase this is the workflow so suppose reducer is a block in which multiple thing called slices of you website is there like cart , user, payment details etc etc so in our website context we have to target user 

export const appStore = configureStore({
  // reducer:{
  //     auth: authReducer
  // }
  reducer: rootReducer,
  middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
});