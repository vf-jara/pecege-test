import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { GlobalStyle } from './Global.style.ts'
import Home from './pages/Home.tsx'
import Contacts from './components/Contacts/Contacts.tsx'
import Details from './components/Details/Details.tsx'
import AddContact from './components/AddContact/AddContact.tsx'
import EditContact from './components/EditContact/EditContact.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, //Evita que a busca seja refeita e faz com que as alterações perdurem durante o uso da aplicação
    },
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <Contacts/>
      },
      {
        path:"/details/:id",
        element: <Details/>
      },
      {
        path:"/addContact",
        element:<AddContact/>
      },
      {
        path:"/editContact/:id",
        element:<EditContact/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
<>
    <GlobalStyle/>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
      </QueryClientProvider>
</>

)
