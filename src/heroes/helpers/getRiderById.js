import { riders } from "../data/riders"

export const getRiderById = ( id ) => {
    return riders.find( rider => rider.id === id )
}