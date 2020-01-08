import React from 'react'


const clock = (props) => {
    return (
        <div className={props.type}>
        </div>
    )
}

function startTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    var clock = hour + ":" + minute + ":" + second;
    
    // Display clock and date
    document.getElementsByClassName('clock')[0].innerHTML = clock;
    document.getElementsByClassName('date')[0].innerHTML = date.toDateString();

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10    
    return i;
}

setTimeout(startTime, 10);

export default clock;