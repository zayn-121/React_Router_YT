import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './components/Home/Home'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      
      {
        path: '/',
        element: <Home/> 
      },
      {
        path: 'about',
        element: <About/> 
      },
      {
        path: 'contact',
        element: <Contact/> 
      },
      {
        path: 'github',
        element: <Github/> 
      },
    ]
  }
])
function App() {


  return (
    <>
    {/* <h1 className="bg-green-600 p-4 text-center">React Router</h1> */}
    <RouterProvider router ={router} />
    </>
  )
}

export default App
