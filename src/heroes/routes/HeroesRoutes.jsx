import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage, Hero, MarvelPage, Moto2, MotoGP, SearchPage } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>

        <Navbar />

        <div className="container">

        <Routes>
            <Route path="motogp" element={<MotoGP />}/>
            <Route path="moto2" element={<Moto2 />}/>

            
            <Route path="hero/:heroId" element={<Hero />}/>

            <Route path="/" element={<Navigate to="/motogp" />}/>
        </Routes>
        </div>
    </>
  )
}
