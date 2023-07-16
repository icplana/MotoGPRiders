import { RiderCard } from "./RiderCard"
import { riders } from "../data/riders"
import { useContext, useMemo } from "react"
import { AuthContext } from "../../auth"




export const FavoriteRiders = () => {
  const { state } = useContext( AuthContext )

  const favoritesIds = state.user.favList

  const newRiders = useMemo(() => riders.filter( rider => favoritesIds.includes( rider.id ) ), [ favoritesIds ] )
  

  return (
    <div className="d-flex flex-wrap justify-content-around">
       {
        
        newRiders.map( rider => <RiderCard key={ rider.id } rider ={ rider } />)
       } 
    </div>
  )
}

