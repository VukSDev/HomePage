import React from 'react'

const inputBox = (props) => {
    return (
        <form onSubmit={props.enter}>
            <input type="text" className="inputbox" placeholder={props.placeholder} value={props.inputValue} onChange={props.changed} spellcheck="false" /*onKeyPress={props.enter}*//>\
            <button className="inputbox-button" type="submit"></button>
        </form>
    )
}

export default inputBox;