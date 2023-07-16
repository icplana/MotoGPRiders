import { RiderCard } from "./RiderCard"
import { riders } from "../data/riders"




export const FavoriteRiders = ({ favoritesIds }) => {

  const newRiders = riders.filter( rider => favoritesIds.includes( rider.id ) )
  

  return (
    <div className="d-flex flex-wrap justify-content-around">
       {
        
        newRiders.map( rider => <RiderCard key={ rider.id } rider ={ rider } favoritesIds ={ favoritesIds } />)
       } 
    </div>
  )
}

