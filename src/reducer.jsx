import { ADD_SCORES, DELETE_SCORES, GET_POP_PLAYERS, SHOW_MODAL } from "./actionType"

const INIT_STATE={
    players:[],
    pop_players:[],
    show_modal:false
}
export const reducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case ADD_SCORES:
            return {...state,players:[...state.players,action.payload]}
            case DELETE_SCORES:
                let filtered=state.players.filter((player)=>player!=action.payload)
                console.log("filtered "+filtered)
                return {...state,players:filtered}

                case GET_POP_PLAYERS:
                    console.log("response "+JSON.stringify(action.payload.httpResponse))
                    return {...state,pop_players:action.payload.httpResponse}
                    case SHOW_MODAL:
                        return {...state,show_modal:action.payload}
            default:
                return state
    }
}