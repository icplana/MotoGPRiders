import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getRiderById } from "../helpers"
import { useMemo } from "react"

export const Rider = ({ rider }) => {

  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  
  if ( !rider ){
    return <Navigate to="/moto2" />
  }


  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src= { rider.imgURL }
          alt={ rider.name } 
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ rider.name }</h3>       

        <button
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >Regresar</button>
      </div>


    </div>
  )
}
