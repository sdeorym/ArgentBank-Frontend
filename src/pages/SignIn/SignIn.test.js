import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {loginThunk, userDataThunk} from "./signInSlice"

/*describe("we obtain the data the user has entered", () =>
    const formDataSuccess = [{"nameField": "tony@stark.com"}, {"passwordField": "password123"}];
    const formDataFailure1 = [{"nameField": "peter@parker.com"}, {"passwordField": "password123"}];
    const formDataFailure2 = [{"nameField": "tony@stark.com"}, {"passwordField": "password789"}];   
    {test("Entered data are correct and login is achieved")});*/