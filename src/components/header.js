import React, { Component } from "react";
import { Link } from "gatsby";

export default class Header extends Component {
    state = {
        showMenu: false
    }

    toggleMenu = () => {
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');
        const menuNav = document.querySelector('.menu-nav');
        const menuBranding = document.querySelector('.menu-branding');
        const navItems = document.querySelectorAll('.nav-item');
        if (!this.state.showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));

            // Set Menu State
            this.setState({ showMenu: true });
        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));

            // Set Menu State
            this.setState({ showMenu: false });
        }
    }
    render() {
        return (
            <header>
                <div className="menu-btn" onClick={this.toggleMenu}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>

                <nav className="menu">
                    <div className="menu-branding">
                        <div className="portrait"></div>
                    </div>
                    <ul className="menu-nav">
                        <li className="nav-item">
                            <Link to="/" activeClassName="current" className="nav-link">Home</Link>
                            {/* <a href="/" className="nav-link">
                                Home
                    </a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/about" activeClassName="current" className="nav-link">About Me</Link>
                            {/* <a href="/about" className="nav-link">
                                About Me
                    </a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/work" activeClassName="current" className="nav-link">My Work</Link>

                        </li>
                        <li className="nav-item">
                            <a href="contact.html" className="nav-link">
                                How To Reach Me
                    </a>
                        </li>
                    </ul>
                </nav>
            </header>

        )

    }
}




