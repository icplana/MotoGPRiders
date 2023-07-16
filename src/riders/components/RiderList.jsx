import { useMemo } from "react"
import { getRidersByLeague } from "../helpers"

import { RiderCard } from "./RiderCard"




export const RiderList = ({ league }) => {

    const riders = useMemo( () => getRidersByLeague( league ), [ league ] )

  return (
    <div className="d-flex flex-wrap justify-content-around">
       {
        

        riders.map( rider => <RiderCard key={ rider.id } rider ={ rider } />)
       } 
    </div>
  )
}



