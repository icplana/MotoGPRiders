import { useContext } from 'react'
import { FavoriteRiders } from '../components/FavoriteRiders'
import { getFavoritesDB } from '../../Firebase/firebase'
import { AuthContext } from '../../auth'
// import { testIds } from '../data/riders'

export const Favorites = () => {

  const { state } = useContext( AuthContext )

  const favoriteIds = state.user.favList


  return (
    <>
      <h1>Favoritos</h1>
      <hr />

      <FavoriteRiders favoritesIds={ favoriteIds } />
    </>
  )
}
