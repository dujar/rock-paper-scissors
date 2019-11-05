
import React from 'react'

export const NewGameAnnouncement = (props) => {

    let { timer } = props
    return (
        <div className={'frame_wrapper'}>
            NEW GAME WILL START IN
            <div className={'time_container'}>
                <h2 >{timer}</h2>
            </div>
        </div>
    )
}


