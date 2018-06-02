import React, {Component} from "react";
import './NavBar.css';
import logo from './logo.svg';
import notification from './notification.svg';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {
                selected: 1,
                items: [
                    {
                        name: 'Projects',
                        link: '/'
                    },
                    {
                        name: 'Activities',
                        link: '/'
                    },
                    {
                        name: 'Team',
                        link: '/'
                    }
                ]
            }
        };
    }

    _renderMenuItems() {
        return this.state.menu.items.map((item, index) =>
            <li key={index} className={index === this.state.menu.selected ? 'selected' : ''}>
                {item.name}
            </li>);
    }

    render() {
        return (
            <div className={'NavBar'}>
                <div className={'center'}>
                    <div className={'logo'}>
                        <img src={logo}/>
                    </div>
                    <ul className={'menu'}>
                        {this._renderMenuItems()}
                    </ul>
                    <div className={'user-info'}>
                        <div className={'notification'}>
                            <img src={notification}/>
                        </div>
                        <div className={'profile'}>
                            <img />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;