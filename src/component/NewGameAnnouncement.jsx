
import React from 'react'

export const NewGameAnnouncement = (props) => {

    let { timer } = props
    return (
        <div>
            NEW GAME WILL START IN <span>{timer}</span>
        </div>
    )
}


