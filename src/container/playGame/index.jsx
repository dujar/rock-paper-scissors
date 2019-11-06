import React from 'react'
import { SelectMove } from '../selectMove'
import { YOU_VS_COMPUTER, resetGame } from '../../actions'
import { connect } from 'react-redux'
import { TrackScore } from '../../component'
import { switchGameMode, startNewGame, refreshScore } from '../../actions'
import './index.css'
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
    refreshScore = () => {
        this.props.dispatch(refreshScore())
    }
    render() {
        let { mode, result, score, action_player, action_opponent, message, timer, match } = this.props
        return (
            <div className={"game_card"}>
                <div className={'top_container'}>
                    <div className="mode_title">
                        {mode.split('_').join(' ')}
                    </div>
                    <TrackScore mode={mode} score={score} />
                    <div className="game_count">GAME  NUMBER: <span className={"game_number"}>{match}</span></div>
                </div>

                <div className={'move_selection_container'}>
                    <SelectMove computer {...action_opponent && { selected: action_opponent }} />
                    <div className={'divider'} />
                    {result &&
                        <React.Fragment>
                            <div className={"message_result_" + result.toLowerCase()}>
                                {message && message}
                            </div>
                            <div className={'divider'} />
                        </React.Fragment>
                    }
                    <SelectMove {...mode === YOU_VS_COMPUTER ? { you: true } : { computer: true }} {...action_player && { selected: action_player }} />
                </div>
                {
                    !timer && (
                        <div className={'new_game_button_container'}>
                            <button className={'button_game'} onClick={this.handleGameSwitch}>
                                SWITCH GAME
                        </button>
                            <button className={'button_game'} onClick={this.refreshScore}>
                                REFRESH SCORE
                        </button>
                            <button className={'button_game'} onClick={this.newGame}>
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
        result: state.game.result,
        message: state.game.message,
        action_player: state.game.action_player,
        action_opponent: state.game.action_opponent,
        timer: state.game.timer
    }
})(PlayGameComponent)