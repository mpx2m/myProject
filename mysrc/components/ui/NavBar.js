import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  
import '../../stylesheets/NavBar.scss'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="rainyDevNav">
        <Navbar dark expand="md" className="fixed-top" >
          <NavbarBrand className="brandName" href="/">
            <img className ="logo" src={'/assets/img/Asset3.svg'}width="56" height="28" />RainyDev
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}