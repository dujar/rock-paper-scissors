import React from 'react'

import { selectMode, YOU_VS_COMPUTER, COMPUTER_VS_COMPUTER, advanceToGamePhase } from '../../actions'
import { connect } from 'react-redux'

import './index.css'
class SelectModeComponent extends React.Component {

    handleModeSelection = (mode) => {
        this.props.dispatch(advanceToGamePhase(1))
        this.props.dispatch(selectMode(mode))
    }
    render() {

        return (
            <div className={"frame_wrapper"}>
                <button className={'button_mode'} onClick={() => this.handleModeSelection(YOU_VS_COMPUTER)}>
                    YOU VS COMPUTER
                </button>
                <button className={'button_mode'} onClick={() => this.handleModeSelection(COMPUTER_VS_COMPUTER)}>
                    COMPUTER VS COMPUTER
                </button>
            </div>

        )
    }
}

export const SelectMode = connect(state => {

    return {
        mode: state.game.mode,
    }
})(SelectModeComponent)