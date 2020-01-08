import React from 'react'

const sidebar = (props) => {
    return (
        <div className="sidebar" id="closed">
            <div className="sidebar-arrow" onClick={toggleSidebar}>
                <img id="closed-arrow" src="/images/arrow.png" alt=""/>
            </div>

            <div className="sidebar-list">
                <div className="sidebar-list--element">TODO 1</div>
                <div className="sidebar-list--element">TODO 2</div>
                <div className="sidebar-list--element">TODO 3</div>
                <div className="sidebar-list--element">TODO 4</div>
            </div>
        </div>
    )
}

const listElements = document.getElementsByClassName('sidebar-list--element');

// Opens and closes the sidebar
function toggleSidebar() {
    if(document.getElementsByClassName('sidebar')[0].id === 'closed') {
        document.getElementsByClassName('sidebar')[0].id = 'open';

        // Slide sidebar from the left
        document.getElementsByClassName('sidebar')[0].style.transform = 'translate(0rem)';

        // Rotates the arrow to point left
        document.getElementsByClassName('sidebar-arrow')[0].getElementsByTagName('img')[0].style.transform = 'rotate(90deg)';

        // Shows the elements
        for(let i = 0; i < listElements.length; i++) {
            listElements[i].style.opacity = .8;
        }
    }

    else if(document.getElementsByClassName('sidebar')[0].id === 'open') {
        document.getElementsByClassName('sidebar')[0].id = 'closed';

        // Slide sidebar to the left
        document.getElementsByClassName('sidebar')[0].style.transform = 'translate(-35rem)';

        // Rotates the arrow to point right
        document.getElementsByClassName('sidebar-arrow')[0].getElementsByTagName('img')[0].style.transform = 'rotate(-90deg)';

        // Hides the elements
        for(let i = 0; i < listElements.length; i++) {
            listElements[i].style.opacity = 0;
        }
    }
}

export default sidebar;