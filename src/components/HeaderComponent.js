import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,  Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    render() {
        const navItemStyle = {
            display:'inherit'
        }
        return(
            <React.Fragment>
    <Navbar dark expand="md">
        <div className="container">
        <NavbarToggler onClick={this.toggleNav}/>
          <NavbarBrand className="mr-auto" href="/">
          <img src="assets/images/logo.png" alt="Ristoronte Con Fusion" height="30" width="41"/>
          </NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
          <Nav navbar >
            <NavItem style={navItemStyle}>
                <NavLink className="nav-link" to="/home">
                <span className="fa fa-home fa-lg">Home</span>
                </NavLink>
                <NavLink className="nav-link" to="/aboutus">
                <span className="fa fa-info fa-lg">About Us</span>
                </NavLink>
                <NavLink className="nav-link" to="/menu">
                <span className="fa fa-list fa-lg">Menu</span>
                </NavLink>
                <NavLink className="nav-link" to="/contactus">
                <span className="fa fa-address-card fa-lg">Contact Us</span>
                </NavLink>
            </NavItem>
            </Nav>
            </Collapse>
        </div>
        </Navbar>
        <Jumbotron>
            <div className="container">
            <div className="row row-header">
                <div className="col-12 c0l-sm-6">
                    <h1>Ristorante Con Fusion</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Assumenda nesciunt distinctio aspernatur 
                        iure dolores maxime voluptate molestias.</p>
                </div>
            </div>
            </div>
        </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;