import React from 'react'
import { ROCK, PAPER, SCISSORS, playerGameAction } from '../../actions'
import { paperPath, rockPath, scissorPath } from '../../assets'
import { Timer } from '../timer'
import { connect } from 'react-redux'
import './index.css'
const Image = (props) => {

    let src;

    if (props.rock) {
        src = rockPath
    }
    if (props.scissors) {
        src = scissorPath
    }
    if (props.paper) {
        src = paperPath
    }

    return !props.selected
        ? <img src={src} width="100" height="100" onClick={props.onClick} className={'image'} />
        : <img src={src} width="100" height="100" onClick={props.onClick} />
}

class SelectMoveComponent extends React.Component {
    handleClick = (move) => {
        this.props.dispatch(playerGameAction(move))
    }
    render() {
        let { selected, computer, timer } = this.props
        return computer ?
            <div className={'timer_container_move'}>
                <Timer />
                <div>
                    {selected === ROCK && <Image rock selected />}
                    {selected === PAPER && <Image paper selected />}
                    {selected === SCISSORS && <Image scissors selected />}
                </div>
            </div>
            :
            <div>
                {!selected ? <div>
                    <Image rock {...timer > 0 && { onClick: () => this.handleClick(ROCK) }} />
                    <Image paper {...timer > 0 && { onClick: () => this.handleClick(PAPER) }} />
                    <Image scissors {...timer > 0 && { onClick: () => this.handleClick(SCISSORS) }} />
                </div>
                    :
                    <div>
                        {selected === ROCK && <Image rock selected />}
                        {selected === PAPER && <Image paper selected />}
                        {selected === SCISSORS && <Image scissors selected />}
                    </div>
                }

            </div>

    }
}


export const SelectMove = connect(state => ({ timer: state.game.timer }))(SelectMoveComponent)