import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
// 0) we use query where we find createApi and fetchBaseQuery

import { userLoggedIn } from "../authSlice";


// 0.1) we can give api using axios on frontend but we use rtk so we use api here below is the code and explaination along with the code


const USER_API = "http://localhost:3000/api/v1/user/"
// 0.2) this is the base url which we use

export const authApi = createApi({
  reducerPath:"authApi", //1) first reducerPath dete hai nam kuch bhi de do
  baseQuery:fetchBaseQuery({ 
    // 2) next baseQuery dete hai jisme hume fetchBaseQuery milti hai same redux ke query se isme ek object pas krenge 
    baseUrl:USER_API, //2.1) object kr andr 2 cheeze pass krenge sbse pehle baseurl set krdo ye apki api hogi bss endpoint ni hoga
    credentials:"include" //2.2) credential jese axios ke time withCredentials dete the yaha credentials include denge taki error na aaye
  }),
  endpoints:(builder)=>({ 
    // 3) endpoint aayega ab yaha callback function liya jisme builder pass krenge, builder mai 2 cheeze hoti hai mutation and query 
      signupUser:builder.mutation({
        // 3.1) signupUser ek tarike ka variable hai jb iske andr ka kuch hoga to yahi trigger hoga, jb data post krna hota hai to mutation use krte hai or jb data get/ fetch krna hita hai to query use krte hai, iske andr bhi object pass hoga
        query:(signupData)=>({
          // 3.2) mutation ke andr query lenge fir isme bhi callback fun with object lenge isme signupData dalenge kuki yaha signup ka hi data milega isiliye tum kuch bhi daal skte ho
          url:"signup", // 3.2.1) ye jo api mai chipkega
          method:"POST", // 3.2.2) ye hogya method
          body:signupData // 3.2.3) ye aagay data jo dalega user
        })
      }),
      signinUser:builder.mutation({
        query:(signinData)=>({
          url:"signin",
          method:"POST",
          body:signinData
        }),
        // 4) login krne ke baad action ko dispatch krenge  uske liye niche wale steps hai
        async onQueryStarted(arg, {queryFulfilled, dispatch}){
          // 4.1) jb bhi login user wala api start/hit hoga to ye wala fn execute hoga iske andr 2 cheeze milti hai arg and queryFulfilled, dispatch bhi receive kr liya kuki dispatch bhi to use krna hai
          try {
            const result = await queryFulfilled
            // 4.2) jb login wali api hit hogi to hume user milega uske details ke saath uss user ko hum yaha result mai daal rhe hai kese, jb login api hit hogi to onQueryStarted run hoga or usme hume queryFulfilled milti hai jisme humara user hoga 

            dispatch(userLoggedIn({user:result.data.user}))
            // 4.3) uss user ka data yaha nikal lenge
          } 
          catch (error) {
            console.log("error in authapi",error||error.message);
            // res.status(500).json({
            //   message:"internal error",
            //   success:false
            // })
            
          }
        }
      })
  })
})

export const {
  useSignupUserMutation,
  useSigninUserMutation
} = authApi;

// 5) yaha vo signup and signin mutation hook bn gya hai dekho to