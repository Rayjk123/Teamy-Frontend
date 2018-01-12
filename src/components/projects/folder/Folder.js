import React, {Component} from 'react';
import './Folder.css';

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        }
    }

    render() {
        return (
            <svg className={`Folder ${this.state.color}`} width="240px" height="192px" viewBox="0 0 240 192"
                 version="1.1">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                   transform="translate(-220.000000, -150.000000)">
                    <g transform="translate(220.000000, 150.000000)">
                        <g>
                            <g>
                                <rect className="body" x="0" y="30" width="240" height="162"/>
                                <path d="M0,14 L0,0 L58.987912,0 L73,14 L240,14 L240,30 L0,30 L0,14 Z" id="top"
                                      className="top"/>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}

export default Folder;