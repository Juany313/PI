import axios from "axios";

export const GET_DRIVERS = "GET_DRIVERS";
export const GET_DRIVERS_BY_NAME = "GET_DRIVERS_BY_NAME";
export const GET_TEAMS = "GET_TEAMS";


export function getDrivers(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/drivers")
        return dispatch({
            type: GET_DRIVERS,
            payload: response.data
        })
    }
}
export function getDriversByName(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/drivers?name=${name}`)
        return dispatch({
            type: GET_DRIVERS_BY_NAME,
            payload: response.data
        })
    }
}
export function getTeams(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/teams")
        return dispatch({
            type: GET_TEAMS,
            payload: response.data
        })
    }
}


