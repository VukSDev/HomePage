import React from 'react';
import './css/style.css';

// Components
import InputBox from './InputBox/InputBox';
import Bookmark from './Bookmark/Bookmark';
import Sidebar from './Sidebar/Sidebar';
import Clock from './Clock/Clock';

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <div className="global-container">
        <div className="middle-container">
          <Clock type="clock" />
          <Clock type="date" />
          <InputBox placeholder="duckduckgo"/>
          <div className="bookmark-container">
            <Bookmark site="https://www.4chan.org/g/" target="_blank" image="/images/4chan.png"/>
            <Bookmark site="https://www.reddit.com/" target="_blank" image="/images/reddit.png"/>
            <Bookmark site="https://www.youtube.com/" target="_blank" image="/images/youtube.png"/>
          </div>
        </div>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App;
