import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { Moto2, MotoGP, Rider } from "../../riders/pages"
import { Favorites } from "../pages/Favorites"

export const RiderRoutes = () => {
  return (
        
      <>
        <Navbar/>
        <Routes>

          <Route path="motogp" element = { <MotoGP/> } />

          <Route path="moto2" element = { <Moto2/> } />

          <Route path="favoritos" element = { <Favorites/> } />

                   
          <Route path="/*" element = { <Navigate to="motogp"/> } />

          


        </Routes>
      
      </>
    
    
  )
}
