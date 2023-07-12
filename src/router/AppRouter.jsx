import { Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { LoginPage } from "../auth/pages/LoginPage"
import { PrivateRoutes } from "./PrivateRoutes"
import { RiderRoutes } from "../riders/routes/RiderRoutes"
import { RegisterPage } from "../auth/pages/RegisterPage"


export const AppRouter = () => {
  return (
    <Routes>

    <Route path="/login" element=
    {
      <PublicRoutes>
        <LoginPage />
      </PublicRoutes>
    }
    />

    <Route path="/register" element=
    {
      <PublicRoutes>
        <RegisterPage />
      </PublicRoutes>
    }
    />

    <Route path="/*" element=
    {
      <PrivateRoutes>
        <RiderRoutes />
      </PrivateRoutes>
    } 
    />


    </Routes>
  )
}
