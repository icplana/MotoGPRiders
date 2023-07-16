import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth";
import { updateFavoriteDB } from "../../Firebase/firebase";

export const RiderCard = ({ rider }) => {

  const { state, updateFavList } = useContext( AuthContext )

  const favoritesIds = state.user.favList
  
  const addFavs = ( id ) => {
    favoritesIds.push( id )
    console.log(favoritesIds)
    updateFavList( favoritesIds )
    updateFavoriteDB({ userId: state.user.id, riderList: favoritesIds })
  }
  const removeFavs = ( id ) => {
    const riderList = favoritesIds.filter( fav => fav !== id )
    updateFavList( riderList )
    updateFavoriteDB({ userId: state.user.id, riderList })
  }
  
  
  
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
     

      {
        state.user.email !== 'GUEST' &&
        state.user.email !== undefined &&

        ( favoritesIds.includes( id )
          ? <button className="btn btn-primary mt-2" onClick={ () => removeFavs( id )}>Eliminar de Favoritos</button>
          : <button className="btn btn-primary mt-2" onClick={ () =>  addFavs( id )}>Añadir a Favoritos</button>
        )
      } 
      
      </div>
    )
  }
  