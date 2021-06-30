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
        alert("Hvala što podržavaš Simi's shop!");
      }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Simi's shop <i className="fas fa-heart"></i>

                </h1>
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
                <Button onClick={this.love}>Klikni da podržiš rad :)</Button>
            </nav>
        )
    }
}

export default Navbar;
