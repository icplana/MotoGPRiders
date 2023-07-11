import { riders } from "../data/riders";



export const getRidersByLeague = ( league ) => {

    const validLeagues = ['MotoGP', 'Moto2']

    if ( !validLeagues.includes( league )) {
        throw new Error(`${ league } is not a valid League`)
    }

    return riders.filter( rider => rider.league === league )
}