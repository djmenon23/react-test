import React, { Component } from 'react';
import { Navbar, NavbarBrand,
     Nav, NavbarToggler, Collapse, NavItem,
      Jumbotron, Modal, Button, ModalBody, 
      ModalHeader, FormGroup, Form, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    toggleModal() {
        this.setState({isModalOpen: !this.state.isModalOpen}) 
    }

    handleLogin(event) {
        this.toggleModal();
        alert("username: "+ this.username.value + "password: "+this.password.value)
        event.preventDefault();
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
            <Nav className="ml-auto" navbar>
            <NavItem>
                <Button outline onClick={this.toggleModal}></Button>
                <span className="fa fa-sign-in fa-lg">Login</span>
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
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}></Input>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}></Input>
                </FormGroup>
                <FormGroup>
                    <Label check>
                    <Input type="checkbox" name="remember"/>
                    Remember Me
                    </Label>
                </FormGroup>
                <Button type="submit" value="submit" className="bg-primary">Login</Button>
                </Form>
            </ModalBody>
        </Modal>
            </React.Fragment>
        );
    }
}

export default Header;