import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { GlobalStyle } from './Global.style.ts'
import Home from './pages/Home.tsx'
import Contacts from './components/Contacts/Contacts.tsx'
import { ContactsProvider } from './context/ContactsContext.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <Contacts/>
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
<>
    <GlobalStyle/>
    <ContactsProvider>
      <RouterProvider router={router}/>
    </ContactsProvider>
</>

)
