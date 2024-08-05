import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignUp from './Components/Pages/SignUp/SignUp';
import Login from './Components/Pages/Login/Login'
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<SignUp></SignUp>
      },
      {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/home',
      element:<Home></Home>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
