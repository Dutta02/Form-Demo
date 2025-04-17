import './App.css'
import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppLayout from './Layout/AppLayout'
import FormProtal from './Page/FormPortal'
import  FormComponents from './Page/Form'
import Addresses from './Page/Addresses'


function App() {
  const router = createBrowserRouter([
    {
     path:"/",
     element:<AppLayout />,
     children:[
       {
         path:"/",
         element:<FormProtal/>
       },
       {
        path: '/contact',
        element: <FormComponents />
      },
      {
        path: '/addresses',
        element: <Addresses />
      }
     ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App