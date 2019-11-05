export const GAME_SWITCH = "@@game/GAME_SWITCH"
export const GAME_NEW = "@@game/GAME_NEW"
export const GAME_REFRESH = "@@game/GAME_REFRESH"
export const GAME_MODE = "@@game/GAME_MODE"
export const GAME_PROCESS_RESULT = "@@game/GAME_PROCESS_RESULT"
export const GAME_PROCESS_TIMER = "@@game/GAME_PROCESS_TIMER"
export const GAME_TIMER_TICK = "@@game/GAME_TIMER_TICK"

export const GAME_NEW_TIMER_TICK = "@@game/GAME_NEW_TIMER_TICK"
export const GAME_NEW_PROCESS_TIMER = "@@game/GAME_NEW_PROCESS_TIMER"


export const GAME_PLAYER_ACTION = "@@game/GAME_PLAYER_ACTION"
export const GAME_OPPONENT_ACTION = "@@game/GAME_OPPONENT_ACTION"

export const GAME_MESSAGE = "@@game/GAME_MESSAGE"
export const GAME_SET_WINNER = "@@game/GAME_SET_WINNER"

export const GAME_PHASE = "@@game/GAME_PHASE"
export const GAME_RESET = "@@game/GAME_RESET"



export const COMPUTER_VS_COMPUTER = 'COMPUTER_VS_COMPUTER'
export const YOU_VS_COMPUTER = 'YOU_VS_COMPUTER'


export const ROCK = 'ROCK'
export const PAPER = 'PAPER'
export const SCISSORS = 'SCISSORS'

export const WIN = 'WIN'
export const LOSE = 'LOSE'
export const DRAW = 'DRAW'


export const playerGameAction = (move) => ({
    type: GAME_PLAYER_ACTION,
    payload: move
})
export const advanceToGamePhase = (payload) => ({
    type: GAME_PHASE,
    payload
})
export const processGameTimer = () => ({
    type: GAME_PROCESS_TIMER
})

export const selectMode = (payload) => dispatch => {

    dispatch({
        type: GAME_MODE,
        payload
    })
    dispatch(processGameTimer())
}
export const switchGameMode = () => (dispatch, getState) => {

    let mode = getState().game.mode;

    if (mode === COMPUTER_VS_COMPUTER) {
        mode = YOU_VS_COMPUTER
    } else {
        mode = COMPUTER_VS_COMPUTER
    }

    dispatch({
        type: GAME_NEW,
        payload: 0
    })

    dispatch({
        type: GAME_SWITCH,
        payload: mode
    })
    dispatch(processGameTimer())


}

export const processGameResult = () => ({ type: GAME_PROCESS_RESULT })


export const newGame = () => (dispatch, getState) => {
    let match = getState().game.match + 1;
    dispatch({ type: GAME_NEW, payload: match })

}



export const startNewGame = () => (dispatch, getState) => {

    let match = getState().game.match + 1
    dispatch({ type: GAME_NEW, payload: match })

    dispatch({ type: GAME_NEW_PROCESS_TIMER })


}

export const resetGame = () => dispatch => {
    let payload = {
        result: false,
        message: false,
        timer: false,
        new_game_timer: false,
        action_player: false,
        action_opponent: false,
    }
    return dispatch({
        type: GAME_RESET,
        payload
    })
}