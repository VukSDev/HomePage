//-IMPORTS-------------------------------------------------------//
import React, { Component } from 'react';

// Styles
import './css/style.css';

// Images
import logo4chan from './images/4chan.png';
import logoReddit from './images/reddit.png';
import logoYoutube from './images/youtube.png';
import backgroundImage from './images/background.jpg';
import arrowImage from './images/arrow.png';

// Components
import InputBox from './InputBox/InputBox';
import Bookmark from './Bookmark/Bookmark';
import Sidebar from './Sidebar/Sidebar';
import Clock from './Clock/Clock';
import TodoList from './TodoList/TodoList';
//--------------------------------------------------------------//

const listElements = document.getElementsByClassName("sidebar-list--element");

class App extends Component {
  state = {
    // Inputbox
    isSearchOn: true,
    placeholder: 'duckduckgo',
    value: '',
    search: 'https://duckduckgo.com/?q=',

    // Sidebar - background link
    potentialBackgroundLink: '',
    backgroundLink: '/background.jpg',

    // Sidebar - Todo list
    taskName: ""
  }
  
  // Styles to apply inline
  inlineStyles = {
    // Background image for global container
    backgroundImage: 'url(' + backgroundImage + ')'
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

  // Listens to enter to search the chosen search engine
  submitHandler = (event) => {
    event.preventDefault();

    console.log("Searching for " + this.state.value + " on " + this.state.placeholder + "...");

    window.open(this.state.search + this.state.value);
  }

  // Changes the text of the task name
  taskNameChangeHandler = (event) => {
    this.setState({
      taskName: event.target.value
    });
  }
  
  // Write a function that handles creation of new elements
  addItemTodo = (event) => {
    event.preventDefault();
    for(let i = 0; i < listElements.length; i++) {
        if((listElements[i].style.transform === "" || listElements[i].style.transform === "scale(0)") && this.state.taskName !== "" && listElements[i].innerHTML === "") {
            listElements[i].style.transform = "scale(1)";
            listElements[i].innerHTML = this.state.taskName;
            break;
        }
    }

    if(this.state.taskName === "clear") {
      for(let i = 0; i < listElements.length; i++) {
        listElements[i].style.transform = "scale(0)";
        setTimeout(function(){listElements[i].innerHTML = "";}, 400);
      }
    }
    
    this.setState({
      taskName: ""
    });
  }
  
  render() {
    return (
      <div>
        <div className="global-container" style={this.inlineStyles}>
          <div className="middle-container">
            <Clock type="clock" />
            <Clock type="date" />
            <InputBox placeholder={this.state.placeholder} inputValue={this.state.value} changed={this.searchChangeHandler} enter={this.submitHandler}/>
            <div className="bookmark-container">
              <Bookmark site="https://www.youtube.com/" target="_blank" image={logo4chan}/>
              <Bookmark site="https://www.reddit.com/" target="_blank" image={logoReddit}/>
              <Bookmark site="https://www.youtube.com/" target="_blank" image={logoYoutube}/>
            </div>
          </div>
        <Sidebar arrowImage={arrowImage} todoList={
        <TodoList onSubmit={this.addItemTodo} taskName={this.state.taskName} onChange={this.taskNameChangeHandler}/>
        }/>
        </div>
      </div>
    )
  }
}

export default App;
