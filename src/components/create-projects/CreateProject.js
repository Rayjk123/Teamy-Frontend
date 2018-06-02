import React, {Component} from 'react';
import './CreateProject.css';

class CreateProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'CreateProject'}>
                <h1 className={'title'}>Create Project</h1>
            </div>
        );
    }
}

export default CreateProject;