import React from 'react'
import { processGameTimer } from '../../actions'
import { connect } from 'react-redux'

class TimerComponent extends React.Component {
    constructor(props) {
        super(props)
        props.dispatch(processGameTimer())
    }


    render() {
        let { timer } = this.props
        return (
            <div>
                {timer}
            </div>
        )
    }
}

export const Timer = connect(state => ({
    timer: state.game.timer
}))(TimerComponent)