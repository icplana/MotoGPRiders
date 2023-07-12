import { Navigate } from "react-router-dom"
import { loggedIn } from "../auth/authData"
import { useContext } from "react"
import { AuthContext } from "../auth"


export const PrivateRoutes = ({ children }) => {

  const { state } = useContext( AuthContext )
  

  return (
    ( state.logged )
    ? children
    : <Navigate to='/login' />


  )
}
