import React from 'react'

// Hides the element on click
const taskHideHandler = (e) => {
    let target = e.target;

    let originalColor = target.style.color;
    // let originalSize = target.style.fontSize;

    if(target.className === "sidebar-list--element") {
        target.style.transform = "scale(0)";
        target.style.color = "lightgreen";
        // target.style.fontSize = "6rem";
        setTimeout(function(){
            target.innerHTML = "";
            target.style.color = originalColor;
            // target.style.fontSize = originalSize;
        }, 400);
    }
}

const todoList = (props) => {
    return (
        <div className="sidebar-list">
            <form className="todolist-form" onSubmit={props.onSubmit}>
                <input className="todolist" placeholder="enter task" spellCheck="false" value={props.taskName} onChange={props.onChange}/>
                <button className="todolist-button" type="submit"></button>
            </form>

            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            <div onClick={taskHideHandler} className="sidebar-list--element"></div>
            
        </div>
    )
}

export default todoList;