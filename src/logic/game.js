import { createLogic } from 'redux-logic'
import {
    GAME_PROCESS_RESULT, GAME_PROCESS_TIMER, GAME_TIMER_TICK, ROCK, SCISSORS, PAPER, GAME_NEW,
    GAME_PLAYER_ACTION, GAME_OPPONENT_ACTION, GAME_SET_WINNER, GAME_MESSAGE, DRAW, WIN, LOSE, YOU_VS_COMPUTER,
    pushScore,
    SCORE_START,
    GAME_PHASE, GAME_NEW_PROCESS_TIMER, GAME_NEW_TIMER_TICK, processGameTimer
} from '../actions'

let MOVES_ALLOWED = [ROCK, SCISSORS, PAPER]
export const gameLogic = createLogic({
    type: [GAME_PROCESS_RESULT],
    processOptions: {
        dispatchMultiple: true
    },
    process: ({ action, getState }, dispatch, done) => {

        let result
        let action_player
        let action_opponent
        let payload
        let mode = getState().game.mode;

        if (mode === YOU_VS_COMPUTER) {
            action_player = getState().game.action_player
            action_opponent = MOVES_ALLOWED[Math.floor(Math.random() * 3)]
            dispatch({
                type: GAME_OPPONENT_ACTION,
                payload: action_opponent
            })
        } else {
            action_player = MOVES_ALLOWED[Math.floor(Math.random() * 3)]
            action_opponent = MOVES_ALLOWED[Math.floor(Math.random() * 3)]
            dispatch({
                type: GAME_PLAYER_ACTION,
                payload: action_player
            })
            dispatch({
                type: GAME_OPPONENT_ACTION,
                payload: action_opponent
            })
        }

        if (action_player) {
            result = getWinner(action_player, action_opponent)
        }


        if (mode === YOU_VS_COMPUTER) {
            payload = 'YOU ' + result;

        } else {
            payload = 'COMPUTER ONE ' + result + 'S'
        }
        if (result === DRAW) {
            payload = `IT'S A DRAW!`
        }
        if (action_player === false) {
            payload = 'YOU LOSE BY DEFAULT!'
            result = LOSE
        }


        dispatch({
            type: GAME_SET_WINNER,
            payload: result
        })
        dispatch({
            type: GAME_MESSAGE,
            payload
        })

        dispatch({ type: SCORE_START })

        done()
    }
})





let timerInterval
export const gameTimerLogic = createLogic({
    type: [GAME_PROCESS_TIMER],
    processOptions: {
        dispatchMultiple: true
    },
    process: ({ action, getState }, dispatch, done) => {
        let timing = 5;

        dispatch({ type: GAME_TIMER_TICK, payload: timing })

        timerInterval = setInterval(() => {
            timing--
            if (timing === 0) {
                dispatch({ type: GAME_PROCESS_RESULT })
                dispatch({ type: GAME_TIMER_TICK, payload: false })

                clearInterval(timerInterval)
                done()
            } else {
                dispatch({ type: GAME_TIMER_TICK, payload: timing })
            }
        }, 1000)



    }
})


let newGametimerInterval

export const newGameTimerLogic = createLogic({
    type: [GAME_NEW_PROCESS_TIMER],
    processOptions: {
        dispatchMultiple: true
    },
    process: ({ getState, action }, dispatch, done) => {

        let timing = 2;

        dispatch({ type: GAME_PHASE, payload: 2 })
        dispatch({ type: GAME_NEW_TIMER_TICK, payload: timing })

        newGametimerInterval = setInterval(() => {
            timing--
            if (timing === 0) {
                dispatch({ type: GAME_PHASE, payload: 1 })
                dispatch({ type: GAME_NEW_TIMER_TICK, payload: false })
                clearInterval(newGametimerInterval)
                dispatch(processGameTimer())

                done()
            } else {
                dispatch({ type: GAME_NEW_TIMER_TICK, payload: timing })
            }
        }, 1000)

    }
})


export function getWinner(action_player, action_opponent) {
    let result
    switch (action_player) {
        case ROCK:
            switch (action_opponent) {
                case ROCK:
                    result = DRAW;
                    break;
                case SCISSORS:
                    result = WIN;
                    break
                case PAPER:
                    result = LOSE
                    break;
            }
            break;
        case SCISSORS:
            switch (action_opponent) {
                case ROCK:
                    result = LOSE;
                    break;
                case SCISSORS:
                    result = DRAW;
                    break
                case PAPER:
                    result = WIN
                    break;
            }
            break;
        case PAPER:
            switch (action_opponent) {
                case ROCK:
                    result = WIN;
                    break;
                case SCISSORS:
                    result = LOSE;
                    break
                case PAPER:
                    result = DRAW
                    break;
            }
            break;
    }
    return result
}