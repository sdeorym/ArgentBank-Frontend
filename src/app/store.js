import { configureStore } from "@reduxjs/toolkit"
import signInReducer from "../pages/SignIn/signInSlice"

export const store = configureStore({
  reducer: {
    user: signInReducer,
  }
})
