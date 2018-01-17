import React, {Component} from 'react';
import './Projects.css';
import newProject from './new-project.svg';
import Project from "./project/Project";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.NUM_FOLDERS_PER_ROW = 3;
    }

    _renderProjects() {
        return this.props.projects.map((project, index) =>
            <li className={index < this.NUM_FOLDERS_PER_ROW ? 'top' : ''}>
                <Project project={project}/>
            </li>);
    }

    _renderPlaceHolders() {
        let numFoldersInRow = (this.props.projects.length + 1) % this.NUM_FOLDERS_PER_ROW;
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
                        <div className={'Project new-project'}>
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