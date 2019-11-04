import {
    GAME_RESULT, GAME_NEW, GAME_REFRESH, GAME_SWITCH, GAME_TIMER_TICK,
    GAME_PLAYER_ACTION, GAME_OPPONENT_ACTION, GAME_MODE, GAME_PHASE, GAME_SET_WINNER, GAME_MESSAGE,
    GAME_NEW_TIMER_TICK, GAME_RESET
} from '../actions'


let initialState = {
    mode: false,
    phase: 0,
    match: 1,
    result: false,
    message: false,
    timer: false,
    new_game_timer: false,
    action_player: false,
    action_opponent: false,
}


export const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case GAME_RESET:
            return {
                ...state,
                ...action.payload
            }
        case GAME_NEW_TIMER_TICK:
            return {
                ...state,
                new_game_timer: action.payload
            }
        case GAME_SET_WINNER:
            return {
                ...state,
                result: action.payload
            }
        case GAME_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case GAME_PHASE:
            return {
                ...state,
                phase: action.payload
            }
        case GAME_OPPONENT_ACTION:
            return {
                ...state,
                action_opponent: action.payload
            }
        case GAME_PLAYER_ACTION:
            return {
                ...state,
                action_player: action.payload
            }
        case GAME_TIMER_TICK:
            return {
                ...state,
                timer: action.payload
            }
        case GAME_MODE:
            return {
                ...state,
                mode: action.payload
            }
        case GAME_SWITCH:
            return {
                ...state,
                mode: action.payload
            }
        case GAME_NEW:
            return {
                ...state,
                match: action.payload,
            }
        default:
            return state
    }
}