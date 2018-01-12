import React, {Component} from 'react';
import './styles/icons.css';
import settings from './images/settings.svg';
import './Folder.css';

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folder: props.folder
        }
    }

    render() {
        return (
            <div className={`Folder ${this.state.folder.color}`}>
                <svg width="240px" height="192px" viewBox="0 0 240 192"
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
                <i className={`icon icon-tech-${this.state.folder.icon}`}/>
                <img className={'settings-icon'} src={settings}/>
            </div>
        );
    }
}

export default Folder;