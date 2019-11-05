
import { SCORE_PUSH, SCORE_REFRESH } from '../actions'


let initialState = {
    you: 0,
    computer: 0,
    computer_one: 0,
    computer_two: 0
}

export const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case SCORE_PUSH:
            return {
                ...state,
                ...action.payload
            }
        case SCORE_REFRESH:
            return initialState
        default:
            return state
    }
}