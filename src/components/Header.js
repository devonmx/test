import React, { Component } from 'react';
import logo from '../logo.svg';
import { Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <header>
        <div className="App-header">
          <div className="container-fluid">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        </div>
        <Nav pills>
          <NavLink href="#">Link</NavLink> 
          <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                      <DropdownToggle nav caret>
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </NavDropdown>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink>
        </Nav>
      </header>

    );
  }
}

export default App;
