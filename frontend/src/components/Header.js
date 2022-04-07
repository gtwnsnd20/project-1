import React from "react";
import { Nav, Container, NavItem, NavLink } from 'react-bootstrap';
import { HouseHeartFill, EnvelopePaperHeartFill, BellFill } from 'react-bootstrap-icons';

const Header = () => {
  return (
    <header>
      <Container>
        <h1 className="brandname">ReactIT</h1>
          <Nav className="mx-auto justify-content-end text-center" as="ul">
            <NavItem as="li">
              <NavLink href="#Home">
                <HouseHeartFill color="black" size={36} />
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#Notification">
                <BellFill color="black" size={36} />
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink href="#Message">
                <EnvelopePaperHeartFill color="black" size={36} />
              </NavLink>
            </NavItem>
          </Nav>
      </Container>
    </header>
  );
};

export default Header;
