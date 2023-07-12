import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { AuthContext } from "./AuthContext"
import { types } from "../types/types"



export const AuthProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer( authReducer, { logged: false } )

  const login = async ( name =  '' ) => {
    const action = {
      type: types.login,
      payload: { 
        id: 'ABC',
        name 
      },
    }
    dispatch( action )
  }

  const logout = async () => {
    const action = { type: types.logout }
    dispatch( action )
  }



  return (
    <AuthContext.Provider value={ { state, login, logout } }>
        { children }
    </AuthContext.Provider>
  )
}
