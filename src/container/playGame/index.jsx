import React from 'react'
import { SelectMove } from '../selectMove'
import { YOU_VS_COMPUTER, resetGame } from '../../actions'
import { connect } from 'react-redux'
import { TrackScore } from '../../component'
import { switchGameMode, startNewGame } from '../../actions'
class PlayGameComponent extends React.Component {

    handleGameSwitch = () => {
        this.props.dispatch(resetGame())
        this.props.dispatch(switchGameMode())
        this.props.dispatch(startNewGame())
    }
    newGame = () => {
        this.props.dispatch(resetGame())
        this.props.dispatch(startNewGame())
    }
    render() {
        let { mode, score, action_player, action_opponent, message, timer, match } = this.props
        return (
            <div>
                {mode.split('_').join(' ')}
                <TrackScore mode={mode} score={score} />
                <div>GAME  NUMBER: {match}</div>

                <div>
                    <SelectMove computer {...action_opponent && { selected: action_opponent }} />
                    <div />
                    {message && message}
                    <SelectMove {...mode === YOU_VS_COMPUTER ? { you: true } : { computer: true }} {...action_player && { selected: action_player }} />
                </div>
                {
                    !timer && (
                        <div>
                            <button onClick={this.handleGameSwitch}>
                                SWITCH GAME
                        </button>
                            <button onClick={this.newGame}>
                                NEW GAME
                        </button>
                        </div>)
                }
            </div >
        )
    }
}



export const PlayGame = connect(state => {
    return {
        mode: state.game.mode,
        match: state.game.match,
        score: state.score,
        message: state.game.message,
        action_player: state.game.action_player,
        action_opponent: state.game.action_opponent,
        timer: state.game.timer
    }
})(PlayGameComponent)