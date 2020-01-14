import React, { Component } from 'react';
import './css/style.css';

// Components
import InputBox from './InputBox/InputBox';
import Bookmark from './Bookmark/Bookmark';
import Sidebar from './Sidebar/Sidebar';
import Clock from './Clock/Clock';

class App extends Component {
  state = {
    // inputbox
    isSearchOn: true,
    placeholder: 'duckduckgo',
    value: '',
    search: 'https://duckduckgo.com/?q=',

    //sidebar - background link
    potentialBackgroundLink: '',
    backgroundLink: '/background.jpg'
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
          search: 'https://www.google.com/search?q=',
          isSearchOn: true,
          value: ''
        });
        console.log("The search engine is set to Google");
      break;

      case '-ddg':
        this.setState({
          placeholder: 'duckduckgo',
          search: 'https://duckduckgo.com/?q=',
          isSearchOn: true,
          value: ''
        });
        console.log("The search engine is set to DuckDuckGo");
      break;
        
      case '-w':
        this.setState({
          placeholder: 'wikipedia',
          search: 'https://en.wikipedia.org/wiki/',
          isSearchOn: true,
          value: ''
        });
        console.log("The search engine is set to Wikipedia");
      break;

      case '-yt':
        this.setState({
          placeholder: 'youtube',
          search: 'https://www.youtube.com/results?search_query=',
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
  // backgroundChangeHandler = (event) => {
  //   event.preventDefault();
  //   let currentBackground = this.state.backgroundLink;
  //   let currentPotentialBackground = this.state.potentialBackgroundLink;

  //   this.setState({
  //     potentialBackgroundLink: event.target.value
  //   });

  //   const bodyElement = document.getElementsByTagName("body")[0];
    
  //   if(this.state.potentialBackgroundLink.slice(this.state.potentialBackgroundLink.length - 3) === "png" ||
  //     this.state.potentialBackgroundLink.slice(this.state.potentialBackgroundLink.length - 3) === "jpg" ||
  //     this.state.potentialBackgroundLink.slice(this.state.potentialBackgroundLink.length - 3) === "JPG" ||
  //     this.state.potentialBackgroundLink.slice(this.state.potentialBackgroundLink.length - 3) === "PNG" ) {
  //     this.setState({
  //       backgroundLink: this.state.potentialBackgroundLink
  //     })
        
  //     bodyElement.style.backgroundImage = "url('" + this.state.backgroundLink + "')";
  //   }
  //   else if (this.state.potentialBackgroundLink === "default") {
  //     this.setState({
  //       backgroundLink: '/background.jpg'
  //     })
  //     bodyElement.style.backgroundImage = "url('/background.jpg')";
  //   }
  //   else {
  //     bodyElement.style.backgroundImage = "url('" + this.state.backgroundLink + "')";
  //     console.log(this.state.backgroundLink);
  //   }
  // }

  // Listens to enter to search the chosen search engine
  submitHandler = (event) => {
    event.preventDefault();

    console.log("Searching for " + this.state.value + " on " + this.state.placeholder + "...");

    window.open(this.state.search + this.state.value);
  }
  
  render() {
    return (
      <div>
        <div className="global-container">
          <div className="middle-container">
            <Clock type="clock" />
            <Clock type="date" />
            <InputBox placeholder={this.state.placeholder} inputValue={this.state.value} changed={this.searchChangeHandler} enter={this.submitHandler}/>
            <div className="bookmark-container">
              <Bookmark site="https://www.4chan.org/g/" target="_blank" image="/4chan.png"/>
              <Bookmark site="https://www.reddit.com/" target="_blank" image="/reddit.png"/>
              <Bookmark site="https://www.youtube.com/" target="_blank" image="/youtube.png"/>
            </div>
          </div>
          <Sidebar /*backgroundLink={this.state.backgroundLink} changed={this.backgroundChangeHandler}*//>
        </div>
      </div>
    )
  }
}

export default App;
