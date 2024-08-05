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
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

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
      element:<PrivateRoute>
        <Home></Home>
      </PrivateRoute>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
