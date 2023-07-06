import { riders } from "../data/riders"


export const getRiderByName = ( name ) => {

    return riders.filter( rider => rider.superhero.toLowerCase().includes(name.trim().toLowerCase()) )
}

