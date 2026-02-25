import { configureStore } from "@reduxjs/toolkit"
import { signInSlice } from "../pages/SignIn/signInSlice";
import  { userSlice } from "../pages/User/userSlice";

export const store = configureStore({
  user: {
    id: null,
    username: null,
    contactname: null,
    token: null,
  },
  
  bankBalance: {
    checking: null,
    savings: null,
    creditcard: null,
  },
    reducer: {}
})