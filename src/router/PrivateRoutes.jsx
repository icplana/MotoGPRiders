import { Navigate } from "react-router-dom"
import { loggedIn } from "../auth/authData"


export const PrivateRoutes = ({ children }) => {

 

  return (
    ( loggedIn )
    ? children
    : <Navigate to='/login' />


  )
}
