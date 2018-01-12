import React, {Component} from 'react';
import Folder from "./folder/Folder";

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Folder/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Projects;