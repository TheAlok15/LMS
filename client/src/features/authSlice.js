import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  user:null,
  isAuthenticated:false
}
// first we have to give initial state so before login initial state of user is null obviously, and he is not authenticated



//below is how to create a slice
const authSlice = createSlice({
    name:"authSlice", // you can give any name
    initialState, // we have to provide initial state
    reducers:{ // in terms of cart we can give addItems, removeItems, clearItems and in terms of our website we give login and logout actions
        userLoggedIn: function (state,action){
          state.user = action.payload.user // initial state ke andr jo bhi h usko yaha get krne k liye state. use krna pdta h
          state.isAuthenticated = true;
        }, // each have a function whcih is called reducer fn in which 2 parameters is there state and action
        userLoggedOut: function (state,action){
          state.user = null;
          state.isAuthenticated = false
        }
    },
});

export const {userLoggedIn, userLoggedOut} = authSlice.actions;

export default authSlice.reducer;

// hum jo bhi suppose isLoggedIn mai pass krenge vo action.payload mai aata hai 

// suppose isLoggedIn("user") -> action.payload mai user gya mtlb kuch bhi pass kr skte hai object string number etc

// jb bhi slice create hoti hai 2 cheeze hoti h suppose 
// const createSlice = {actions, reducer} we have to export both