import React from 'react'

const clock = (props) => {
    return (
        <div className="clock">
            {props.time}
        </div>
    )
}

export default clock;