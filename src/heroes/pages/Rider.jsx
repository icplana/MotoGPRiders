import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getRiderById } from "../helpers"
import { useMemo } from "react"

export const Rider = () => {

  const { riderId } = useParams() 
 
  const actualRider = useMemo( () => getRiderById( riderId ), [ riderId ] )

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  
  if ( !actualRider ){
    return <Navigate to="/dc" />
  }


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src= { actualRider.imgURL }
          alt={ actualRider.name } 
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ actualRider.name }</h3>       

        <button
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >Regresar</button>
      </div>


    </div>
  )
}
