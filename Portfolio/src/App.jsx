import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Acceuil from './pages/Acceuil'
import Profil from './pages/Profil'
import Portfolio from './pages/Portfolio'
import Contact, { contactAction } from './pages/Contact'
import './style/style.css'




// router and routes
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Acceuil />} />
      <Route path="Profil" element={<Profil />} />
      <Route path="Portfolio" element={<Portfolio />} />
      <Route path="Contact" element={<Contact />}action={contactAction} />
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router} />
   
   </>
  )
}

export default App
