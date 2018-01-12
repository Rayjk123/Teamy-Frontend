import React, { Component } from 'react';
import NavBar from './navbar/NavBar';
import heart from './heart.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <div className={'authorship'}>
            Made with <img src={heart}/> by <a className={'author-github'} href={'https://github.com/byliuyang'}>Yang Liu</a>
          </div>
      </div>
    );
  }
}

export default App;
