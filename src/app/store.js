import { configureStore } from "@reduxjs/toolkit"
// import { signInSlice } from "../pages/SignIn/signInSlice";
// import  { userSlice } from "../pages/User/userSlice";


const dummyReducer = (state = {}) => state

export const store = configureStore({reducer: {dummy: dummyReducer}})
