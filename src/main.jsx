import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Routes from './components/Routes'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import ErrorBoundary from './components/Error/ErrorHandling'
import Membership from './components/Membership/Membership'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routes />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='membership' element={<Membership />} />
      <Route path="*" element={ErrorBoundary} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
