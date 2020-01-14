import React from 'react';
import '../css/style.css'

const backgroundBox = (props) => {
    return(
        <form className="backgroundbox-form" onSubmit={props.changed}>
            <input placeholder="" className="backgroundbox" type="text" spellCheck="false" />
            <button className="inputbox-button"></button>
        </form>
    )
}

export default backgroundBox;