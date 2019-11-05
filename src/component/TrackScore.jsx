import React from 'react'

import { YOU_VS_COMPUTER } from '../actions'

import './index.css'
export const TrackScore = (props) => {

    let { score, mode } = props
    let player;
    let opponent_player
    let key_player
    let key_opponent_player
    if (mode === YOU_VS_COMPUTER) {
        player = 'YOU'
        opponent_player = 'COMPUTER'
        key_player = 'you'
        key_opponent_player = 'computer'
    } else {
        player = 'COMPUTER ONE'
        opponent_player = 'COMPUTER TWO'
        key_player = 'computer_one'
        key_opponent_player = 'computer_two'
    }
    return (
        <div className={'score_container'}>
            <div className='score'>
                {player}: <span className={"time_number"}>{score[key_player]}</span>
            </div>
            <div className="score">
                {opponent_player}: <span className={"time_number"}>{score[key_opponent_player]}</span>
            </div>
        </div>
    )
}