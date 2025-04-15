import './App.css'
import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppLayout from './Layout/AppLayout'
import FormProtal from './Page/FormPortal'
import Form from './Page/Form'

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
        path: '/team everest/contact',
        element: <Form />
      }
     ]
    }

  ])
  return <RouterProvider router={router} />
}

export default App