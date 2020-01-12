import React from 'react';
import '../css/style.css'

const backgroundBox = (props) => {
    return(
        <input placeholder="" className="backgroundbox" type="text" onChange={props.changed}/>
    )
}

export default backgroundBox;