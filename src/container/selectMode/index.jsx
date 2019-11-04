import React from 'react'

import { selectMode, YOU_VS_COMPUTER, COMPUTER_VS_COMPUTER, advanceToGamePhase } from '../../actions'
import { connect } from 'react-redux'

class SelectModeComponent extends React.Component {

    handleModeSelection = (mode) => {
        this.props.dispatch(advanceToGamePhase(1))
        this.props.dispatch(selectMode(mode))
    }
    render() {
        let { message } = this.props

        return (
            <div>
                <button onClick={() => this.handleModeSelection(YOU_VS_COMPUTER)}>
                    {message ? message : 'YOU VS COMPUTER'}
                </button>
                <button onClick={() => this.handleModeSelection(COMPUTER_VS_COMPUTER)}>
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