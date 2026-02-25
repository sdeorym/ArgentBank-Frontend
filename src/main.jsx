import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './app/store';
import App from './App';
import Home from './pages/Home/Home.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import User from './pages/User/User.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "sign-in", element: <SignIn />},
      {path: "user", element: <User />,}
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
