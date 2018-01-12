import React, {Component} from 'react';
import './Project.css';
import Folder from "../folder/Folder";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: props.project
        }
    }

    render() {
        return (
            <div className={'Project'}>
                <Folder folder={this.state.project.folder}/>
                <div className={'name'}>{this.state.project.name}</div>
                <div className={'description'}>{this.state.project.description}</div>
            </div>
        );
    }
}

export default Project;