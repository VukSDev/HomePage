import React from 'react'

// Components
import BackgroundBox from '../BackgroundBox/BackgroundBox';

const sidebar = (props) => {
    return (
        <div className="sidebar" id="closed">
            <div className="sidebar-arrow" onClick={toggleSidebar}>
                <img id="closed-arrow" src="/arrow.png" alt=""/>
            </div>

            <div className="sidebar-list">
                <div className="sidebar-list--element">TODO 1</div>
                <div className="sidebar-list--element">TODO 2</div>
                <div className="sidebar-list--element">TODO 3</div>
                <div className="sidebar-list--element">TODO 4</div>
            </div>
            <BackgroundBox backgroundLink={props.backgroundLink} changed={props.changed}/>
        </div>
    )
}

const listElements = document.getElementsByClassName('sidebar-list--element');

// Opens and closes the sidebar
function toggleSidebar() {
    // Store the sidebar element and the sidebar arrow element
    const sidebarEl = document.getElementsByClassName('sidebar')[0];
    const sidebarArrowEl = document.getElementsByClassName('sidebar-arrow')[0];

    if(sidebarEl.id === 'closed') {
        sidebarEl.id = 'open';

        // Slide sidebar from the left
        sidebarEl.style.transform = 'translate(0rem)';

        // Rotates the arrow to point left
        sidebarArrowEl.getElementsByTagName('img')[0].style.transform = 'rotate(90deg)';

        // Shows the elements
        for(let i = 0; i < listElements.length; i++) {
            listElements[i].style.opacity = .8;
        }
    }

    else if(sidebarEl.id === 'open') {
        sidebarEl.id = 'closed';

        // Slide sidebar to the left
        sidebarEl.style.transform = 'translate(-35rem)';

        // Rotates the arrow to point right
        sidebarArrowEl.getElementsByTagName('img')[0].style.transform = 'rotate(-90deg)';

        // Hides the elements
        for(let i = 0; i < listElements.length; i++) {
            listElements[i].style.opacity = 0;
        }
    }
}

export default sidebar;