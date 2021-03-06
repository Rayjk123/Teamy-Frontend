import React, {Component} from 'react';
import NavBar from './navbar/NavBar';
import heart from './heart.svg';
import './App.css';
import Projects from "./projects/Projects";
import ProjectsService from "../services/projects.service";
import CreateProject from "./create-projects/CreateProject";

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };

        ProjectsService.getProjects()
            .then(projects => {
                let newState = Object.assign({}, this.state, {
                    projects: projects
                });

                this.setState(newState);
            });
    }

    render() {
        return (
            <div className="App">
                <NavBar/>
                <div className={'center'}>
                    <Projects projects={this.state.projects}/>
                </div>
                {/*<CreateProject onCreateProject={this._createProject}/>*/}
                <div className={'authorship'}>
                    Made with <img src={heart}/> by <a className={'author-github'}
                                                       href={'https://github.com/byliuyang'}>Yang
                    Liu</a>
                </div>
            </div>
        );
    }

    _createProject(project) {

    }
}

export default App;
