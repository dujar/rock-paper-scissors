import React from 'react'
import { processGameTimer } from '../../actions'
import { connect } from 'react-redux'
import './index.css'
class TimerComponent extends React.Component {

    render() {
        let { timer } = this.props
        return timer ? (
            <div className={'time_container'}>
                <h1>{timer}</h1>
            </div>) : null

    }
}

export const Timer = connect(state => ({
    timer: state.game.timer
}))(TimerComponent)