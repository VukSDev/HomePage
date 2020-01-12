import React, { Component } from 'react';
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

class App extends Component {
  state = {
    // inputbox
    isSearchOn: true,
    placeholder: 'duckduckgo',
    value: '',
    search: 'https://duckduckgo.com/?q=',

    //sidebar - background link
    potentialBackgroundLink: '',
    backgroundLink: '/images/background.jpg'
  }

  // Changes search engine based on the given parameter
  searchChangeHandler = (event) => {
    this.setState({
      value: event.target.value
    });

    switch(this.state.value) {
      case '-g':
        this.setState({
          placeholder: 'google',
          isSearchOn: true,
          value: ''
        });
        console.log("The search engine is set to Google");
      break;

      case '-ddg':
        this.setState({
          placeholder: 'duckduckgo',
          isSearchOn: true,
          value: ''
        });
        console.log("The search engine is set to DuckDuckGo");
      break;
        
      case '-w':
        this.setState({
          placeholder: 'wikipedia',
          isSearchOn: true,
          value: ''
        });
        console.log("The search engine is set to Wikipedia");
      break;

      case '-yt':
        this.setState({
          placeholder: 'youtube',
          isSearchOn: true,
          value: ''
        });
        console.log("The search engine is set to YouTube");
      break;
      
      default:
        // this.setState({
        //   isSearchOn: false
        // })
        break;
      }
  }
  
  // Changes background image when url is passed to the input box at the bottom of the sidebar
  backgroundChangeHandler = (event) => {
    this.setState({
      potentialBackgroundLink: event.target.value
    });

    const bodyElement = document.getElementsByTagName("body")[0];
    
    if(this.state.potentialBackgroundLink.slice(this.state.potentialBackgroundLink.length - 3) === "png" ||
      this.state.potentialBackgroundLink.slice(this.state.potentialBackgroundLink.length - 3) === "jpg" ||
      this.state.potentialBackgroundLink.slice(this.state.potentialBackgroundLink.length - 3) === "JPG" ||
      this.state.potentialBackgroundLink.slice(this.state.potentialBackgroundLink.length - 3) === "PNG" ) {
      this.setState({
        backgroundLink: this.state.potentialBackgroundLink
      })
        
      bodyElement.style.backgroundImage = "url('" + this.state.backgroundLink + "')";
    }
    else if (this.state.potentialBackgroundLink === "default") {
      this.setState({
        backgroundLink: '/images/background.jpg'
      })
      bodyElement.style.backgroundImage = "url('/images/background.jpg')";
    }
    else {
      bodyElement.style.backgroundImage = "url('" + this.state.backgroundLink + "')";
      console.log(this.state.backgroundLink);
    }
  }

  // Listens to enter to search the chosen search engine
  keyPressHandler = (event) => {
    if(event.key === "Enter" && this.state.isSearchOn === true && this.state.value !== "") {
      console.log("PRESS");
      switch(this.state.placeholder) {
        case 'google':
          this.setState({
            search: 'https://www.google.com/search?q=' + this.state.value
          })
          window.open(this.state.search);
          break;

        case 'duckduckgo':
          this.setState({
            search: 'https://duckduckgo.com/?q=' + this.state.value
          })
          window.open(this.state.search);
        break;

        case 'wikipedia':
          this.setState({
            search: 'https://en.wikipedia.org/wiki/' + this.state.value
          })
          window.open(this.state.search);
        break;

        case 'youtube':
          this.setState({
            search: 'https://www.youtube.com/results?search_query=' + this.state.value
          })
          window.open(this.state.search);
        break;          

        default:
          break;
      }
    }
  }
  
  render() {
    return (
      <div>
        <div className="global-container">
          <div className="middle-container">
            <Clock type="clock" />
            <Clock type="date" />
            <InputBox placeholder={this.state.placeholder} inputValue={this.state.value} changed={this.searchChangeHandler} enter={this.keyPressHandler}/>
            <div className="bookmark-container">
              <Bookmark site="https://www.4chan.org/g/" target="_blank" image="/images/4chan.png"/>
              <Bookmark site="https://www.reddit.com/" target="_blank" image="/images/reddit.png"/>
              <Bookmark site="https://www.youtube.com/" target="_blank" image="/images/youtube.png"/>
            </div>
          </div>
          <Sidebar backgroundLink={this.state.backgroundLink} changed={this.backgroundChangeHandler}/>
        </div>
      </div>
    )
  }
}

export default App;
