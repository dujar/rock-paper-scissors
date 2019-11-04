import React from 'react'

import { connect } from 'react-redux'
import { SelectMode } from '../selectMode'
import { PlayGame } from '../playGame'
import { NewGameAnnouncement } from '../../component'
class AppContainer extends React.Component {

    render() {
        let { phase, new_game_timer } = this.props
        return (
            <div>
                {phase == 0 && <SelectMode />}
                {phase == 1 && <PlayGame />}
                {phase == 2 && <NewGameAnnouncement timer={new_game_timer} />}
            </div>
        )
    }
}


export const App = connect(state => {

    return {
        phase: state.game.phase,
        new_game_timer: state.game.new_game_timer

    }
})(AppContainer)