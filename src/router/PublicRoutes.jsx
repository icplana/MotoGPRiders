import { Navigate } from "react-router-dom"
import { loggedIn } from "../auth/authData"
import { useContext } from "react"
import { AuthContext } from "../auth"



export const PublicRoutes = ({ children }) => {

  const { state } = useContext( AuthContext )
  

  return (
    ( state.logged )
    ? <Navigate to="/motogp" />
    : children
  )
}
