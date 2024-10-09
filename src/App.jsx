import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import NotFound from './Pages/NotFound'
import SignUpPage from './Pages/SignUpPage'
import mainFirebaseData from './firebase.config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer } from 'react-toastify'
import ResetPassword from './Pages/ResetPassword'
import HomePage from './Pages/HomePage'
import LayoutOne from './Layout/LayoutOne'
import UserPage from './Pages/UserPage'
import Chats from './Pages/Chats'
import MainChat from './Components/MainChat'

function App() {
  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<SignUpPage/>}/>
        <Route path='/resetpass' element={<ResetPassword/>}/>
        <Route path='/' element = {<LayoutOne />} >
        <Route index element ={<HomePage />} />
        <Route path='/people' element ={<UserPage/>} />
        <Route path='/chats' element ={<MainChat/>} />
      </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
    <ToastContainer/>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
