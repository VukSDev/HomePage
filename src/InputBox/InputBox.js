import React from 'react'

const inputBox = (props) => {
    return (
        <input type="text" className="inputbox" placeholder="google" onKeyDown={props.key} /*value={props.value} onChange={props.changeHandler}*//>
    )
}

export default inputBox;