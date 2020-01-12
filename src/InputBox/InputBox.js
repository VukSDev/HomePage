import React from 'react'

const inputBox = (props) => {
    return (
        <input type="text" className="inputbox" placeholder={props.placeholder} value={props.inputValue} onChange={props.changed} onKeyPress={props.enter}/>
    )
}

export default inputBox;