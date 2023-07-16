import React from 'react'
import { RiderList } from '../components/RiderList'

export const Favorites = () => {
  return (
    <>
      <h1>Favoritos</h1>
      <hr />

      <RiderList league={ 'MotoGP' } />
    </>
  )
}
