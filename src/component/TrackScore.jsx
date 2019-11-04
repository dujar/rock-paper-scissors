import React from 'react'

import { YOU_VS_COMPUTER } from '../actions'


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
        opponent_player = 'COMPUTER_TWO'
        key_player = 'computer_one'
        key_opponent_player = 'computer_two'
    }
    return (
        <div>
            <div>
                {player}:{score[key_player]}
            </div>
            <div>
                {opponent_player}:{score[key_opponent_player]}
            </div>
        </div>
    )
}