import { createLogic } from 'redux-logic'
import { SCORE_START, YOU, COMPUTER_ONE, YOU_VS_COMPUTER, SCORE_PUSH, WIN, LOSE } from '../actions'
export const scoreLogic = createLogic({
    type: [SCORE_START],
    process: ({ action, getState }, dispatch, done) => {

        let mode = getState().game.mode
        let result = getState().game.result
        let score
        let opponent_score
        let payload = {}
        let player
        if (mode === YOU_VS_COMPUTER) {
            player = YOU
        } else {
            player = COMPUTER_ONE
        }
        switch (player) {
            case YOU:
                score = getState().score.you;
                opponent_score = getState().score.computer;
                switch (result) {
                    case WIN:
                        score++
                        break;
                    case LOSE:
                        opponent_score++

                }
                payload = {
                    you: score,
                    computer: opponent_score
                }
                break;
            case COMPUTER_ONE:
                score = getState().score.computer_one;
                opponent_score = getState().score.computer_two;
                switch (result) {
                    case WIN:
                        score++
                        break;
                    case LOSE:
                        opponent_score++
                }

                payload = {
                    computer_one: score,
                    computer_two: opponent_score
                }

                break;
        }

        dispatch({
            type: SCORE_PUSH,
            payload
        })

    }
})