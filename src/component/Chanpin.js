import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { Navbar,NavItem,Nav } from 'react-bootstrap';


const navbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/home">首页</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#"><Link to="/chanpin">产品</Link></NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#"><Link to="/guanyu">关于</Link></NavItem>
        <NavItem eventKey={2} href="#"></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
class Chanpin extends Component {
    render() {
        return (
            <div>
                {navbarInstance}
            </div>
        );
    }
}

export default Chanpin;