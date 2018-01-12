import React, {Component} from 'react';
import './Projects.css';
import newProject from './new-project.svg';
import Project from "./project/Project";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.NUM_FOLDERS_PER_ROW = 3;
        this.state = {
            projects: [
                {
                    folder: {
                        color: 'blue',
                        icon: 'android'
                    },
                    name: 'Teamy',
                    description: 'Effective task manager for startups'
                },
                {
                    folder: {
                        color: 'orange',
                        icon: 'ios'
                    },
                    name: 'Knockt',
                    description: 'Virtual doorbell system for householders'
                },
                {
                    folder: {
                        color: 'green',
                        icon: 'react'
                    },
                    name: 'HackWPI Frontend',
                    description: 'Web user interface for HackWPI'
                },
                {
                    folder: {
                        color: 'pink',
                        icon: 'angular'
                    },
                    name: 'Cover Frontend',
                    description: 'Web user interface for Cover'
                },
                {
                    folder: {
                        color: 'red',
                        icon: 'nodejs'
                    },
                    name: 'Movie Search',
                    description: 'A cross device user friendly movie search website'
                },
                {
                    folder: {
                        color: 'purple',
                        icon: 'ruby'
                    },
                    name: 'Wehackers API',
                    description: 'RESTful API specification and mock server for Wehackers.club'
                },
                {
                    folder: {
                        color: 'brown',
                        icon: 'go'
                    },
                    name: 'Tour of Go',
                    description: 'Code samples from tour of Go'
                },
                {
                    folder: {
                        color: 'teal',
                        icon: 'java'
                    },
                    name: 'Algorithms',
                    description: 'Java implementation of fundamental algorithms and data structures in Algorithm 4th Edition'
                },
                {
                    folder: {
                        color: 'gray',
                        icon: 'python'
                    },
                    name: 'CAPTCHA Breaker',
                    description: 'Machine Learning based CAPTCHA Breaker'
                },
                {
                    folder: {
                        color: 'blue-gray',
                        icon: 'c'
                    },
                    name: 'virusCounter',
                    description: 'An anti-virus LKM monitoring characteristics code among difference I/O processes'
                }

            ]
        }
    }

    _renderProjects() {
        return this.state.projects.map((project, index) =>
            <li className={index < this.NUM_FOLDERS_PER_ROW ? 'top' : ''}>
                <Project project={project}/>
            </li>);
    }

    _renderPlaceHolders() {
        let numFoldersInRow = (this.state.projects.length + 1) % this.NUM_FOLDERS_PER_ROW;
        let placeHolders = [];
        if (numFoldersInRow !== 0) {
            let numPlaceHolders = this.NUM_FOLDERS_PER_ROW - (numFoldersInRow);
            for (let i = 0; i < numPlaceHolders; i++)
                placeHolders.push(<li className={i < this.NUM_FOLDERS_PER_ROW ? 'top' : 'place-holder'}/>);
        }
        return placeHolders;
    }

    render() {
        return (
            <div className={'Projects'}>
                <ul>
                    {this._renderProjects()}
                    <li>
                        <div className={'Project'}>
                            <img src={newProject}/>
                        </div>
                    </li>
                    {this._renderPlaceHolders()}
                </ul>
            </div>
        );
    }
}

export default Projects;