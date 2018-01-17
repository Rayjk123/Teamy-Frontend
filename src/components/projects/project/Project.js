import React, {Component} from 'react';
import './Project.css';
import Folder from "./folder/Folder";

class Project extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.project.isOwner);
    }

    render() {
        return (
            <div className={'Project'}>
                <Folder folder={this.props.project.folder} showSettings={this.props.project.isOwner}/>
                <div className={'name'}>{this.props.project.name}</div>
                <div className={'description'}>{this.props.project.description}</div>
            </div>
        );
    }
}

export default Project;