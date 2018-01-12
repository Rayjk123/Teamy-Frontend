import React, {Component} from 'react';
import NavBar from './navbar/NavBar';
import heart from './heart.svg';
import './App.css';
import Projects from "./projects/Projects";

class App extends Component {
    render() {
        return (
            <div className="App">
              <NavBar/>
              <div className={'center'}>
                <Projects/>
              </div>
              <div className={'authorship'}>
                Made with <img src={heart}/> by <a className={'author-github'} href={'https://github.com/byliuyang'}>Yang
                Liu</a>
              </div>
            </div>
        );
    }
}

export default App;
