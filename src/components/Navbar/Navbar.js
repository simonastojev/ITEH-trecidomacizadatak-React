import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    love() {
        alert("Hvala što nas podržavate!");
      }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">GOD<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className={item.cName}><Link to={item.url}>
                                {item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Button onClick={this.love}>Podrška našeg rada :)</Button>
            </nav>
        )
    }
}

export default Navbar;