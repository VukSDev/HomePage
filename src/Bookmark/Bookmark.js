import React from 'react'

const bookmark = (props) => {
    return (
        <a className="bookmark" href={props.site} target={props.target}><img src={props.image} alt=""/></a>
    )
}

export default bookmark;