import React from "react";
import { Nav, NavItem, NavLink, Container } from 'react-bootstrap';
import { HouseHeartFill, EnvelopePaperHeartFill, BellFill } from 'react-bootstrap-icons';
import logo from "./Assets/Images/chicken.png";
import MyAvatar from "./Assets/Avatar";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-brand">
          <Container className="navbar-brand d-flex align-items-center order-lg-0">
            <img src={logo} alt='' />
            <span className="ms-2">ReactIT</span>
          </Container>
        </div>
        <div>
          <Nav className="mx-auto justify-content-end text-center" as="ul">
            <NavItem as="li">
              <NavLink href="#Home">
                <HouseHeartFill color="#d90429" size={30} />
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#Notification">
                <BellFill color="#f5cb5c" size={30} />
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#Message">
                <EnvelopePaperHeartFill color="#a1b5d8" size={30} />
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#user">
                <MyAvatar />
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
