

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { logicArr } from '../logic'
import { createLogicMiddleware } from 'redux-logic'
import { gameReducer } from './game'
import { scoreReducer } from './score'
import thunk from 'redux-thunk'
const composeEnhancers = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const logicMiddleware = createLogicMiddleware(logicArr)
let middlewares = [thunk, logicMiddleware]

let rootReducers = combineReducers({
    game: gameReducer,
    score: scoreReducer
})


export const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(...middlewares))
)