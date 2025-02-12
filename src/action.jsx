import { ADD_SCORES, DELETE_SCORES, GET_POP_PLAYERS, SHOW_MODAL } from "./actionType"
import { options } from "./assets/constants"
import axios from "axios"
export const addScores = (value) => {
    return {
        type: ADD_SCORES,
        payload: value
    }
}

export const deleteScores = (value) => {
    return {
        type: DELETE_SCORES,
        payload: value
    }
}

export const getPopularPlayers = () => {
    return (dispatch) => {
        axios.request(options)
            .then((res) => {
                dispatch(
                    ((data) => {
                        return {
                            type: GET_POP_PLAYERS,
                            payload: {
                                httpResponse: data
                            }
                        }
                    })(res.data)
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const updateModal=(value)=>{
    return{
        type:SHOW_MODAL,
        payload:value
    }
}