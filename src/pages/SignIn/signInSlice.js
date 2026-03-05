import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { store } from "../../app/store.js"

export const loginThunk = createAsyncThunk(
  "user/login",
  async (formData) => {

    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",

      headers: {"Content-Type": "application/json"},

      body: JSON.stringify(
        {
          email: formData.nameField,
          password: formData.passwordField
      }
    )
    })
    const data = await response.json()    
    return data
  }
)

export const userDataThunk = createAsyncThunk(
  "user/profile",
  async (token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    const data = await response.json()

    return data
  }
)

export const userNameEditThunk = createAsyncThunk (
  "user/profile",
  async (formData) => {
    const x = store.getState();
    const token = tokenSelector(store.getState())
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(
        {userName: formData.nameField})
    })
    const data = await response.json()
    return data
  }
)

export const tokenSelector = (state) => state.user.token

const signInSlice = createSlice({
    name:"user",
    initialState: {
        email: null,
        firstName: null,
        lastName: null,
        userName: null,
        id: null,        
        token: null,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
          state.token = action.payload.body.token
          state.status = "succeeded"
        },
      )
        builder.addCase(userDataThunk.fulfilled, (state, action) =>
        { 
          state.profile = action.payload.body
          state.status = "succeeded"
        },        
      )
        /*builder.addCase(userNameEditThunk.fulfilled, (state, action) =>
          {
            state.status = "succeeded"
            state.profile.userName = action.payload.userName
          }
      )*/
        builder.addCase("user/logout", (state, action) => 
          {
            state.token = null
            state.profile = null
            state.status = "succeeded"
          }
      )
        
    }

})

export default signInSlice.reducer