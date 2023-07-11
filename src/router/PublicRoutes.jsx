import { Navigate } from "react-router-dom"
import { loggedIn } from "../auth/authData"



export const PublicRoutes = ({ children }) => {

  

  return (
    ( loggedIn )
    ? <Navigate to="/motogp" />
    : children
  )
}
