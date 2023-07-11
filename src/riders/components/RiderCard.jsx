import { Link } from "react-router-dom";

export const RiderCard = ({ rider }) => {
  
  const { id, name, league, imgURL, country } = rider
  
    return (
      <div className="cardBox card p-2 mb-2">
        <img src={ imgURL } className="animate__animated animate__fadeIn imgCard mx-auto" alt={ name } />
        <h3>{ name }</h3>
        <h5>{ league }</h5>
        <span>{ country }</span>
        
              
        <Link
         to={`motogp/${ id }`}
         className="btn btn-secondary mt-auto"
        >Más información...</Link>
      </div>
    )
  }
  