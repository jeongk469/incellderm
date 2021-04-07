import React, { Component,useRef,useState,useEffect, createRef } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';





class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.togglefalse = this.togglefalse.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.reff = createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            scrolled: false
        };
      }
      togglefalse() {
        
        this.setState({
          isNavOpen: false
        });
      }


      toggleNav() {
        
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      
      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
        
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    

    componentDidMount() {

       
  

        document.addEventListener('mousedown', this.handleClickOutside);

    }



    componentWillUnmount() {

        document.removeEventListener('mousedown', this.handleClickOutside);
        

    }


    handleClickOutside(event) {
        
        if (this.reff.current && !this.reff.current.contains(event.target)) {
            this.setState({
                isNavOpen: false
              });
        }
      }
 

  
   

    render() {
        return( 
            
                <div ref={this.reff}>
                <Navbar className="navbar-light" expand='lg' fixed='top'>
                    <div className="container justify-content-center">
                        
                        <NavbarBrand className="mt-2 mb-2" href="/"><img src= 'assets/images/header-logo.jpg' height="20.41" width="175" alt='Incellderm' /></NavbarBrand>
                        

                    </div>


                </Navbar>

                </div>
            
        );
    }
}


export default Header;