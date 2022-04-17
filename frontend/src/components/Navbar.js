import React from "react";
import { Nav, NavItem, NavLink, Container, Button } from 'react-bootstrap';
import { HouseHeartFill } from 'react-bootstrap-icons';
import logo from "./Assets/Images/chicken.png";
import MyAvatar from "./Assets/Avatar";
import getCookie from "./Utils/getCookie";

function Navbar() {
  //call getCookie to get cookie info
  const cookieInfo = getCookie();
  let isAdmin = false;
  let isLoggedIn=false;
  let username;

  if(cookieInfo !== null) {
    isLoggedIn = true;
    username = cookieInfo.username;
    isAdmin = cookieInfo.is_admin;
    console.log(isAdmin);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Container className="navbar-brand d-flex align-items-center order-lg-0">
            <img src={logo} alt='' />
            <a href="http://localhost:3000">
              <span className="ms-2">ReactIT</span>
            </a>
          </Container>
        </div>
        <div>
          <Nav className="mx-auto justify-content-end text-center" as="ul">
            <NavItem as="li">
              <NavLink href="/">
                <HouseHeartFill color="#d90429" size={30} />
              </NavLink>
            </NavItem>
            {isLoggedIn && <NavItem as="li">
              <h4>{username}</h4>
            </NavItem>}
            {isLoggedIn && <NavItem as="li">
              <NavLink href="#user">
                <MyAvatar />
              </NavLink>
            </NavItem>}
            {isAdmin && <NavItem as="li">
              <NavLink href="/admin">
                <Button>Admin Menu</Button>
              </NavLink>
            </NavItem>}
            {!(isLoggedIn) && <NavItem as="li">
              <NavLink href="/login">
                <Button type="link" size={30}>Login/Register</Button> 
              </NavLink>
            </NavItem>}
            {isLoggedIn && <NavItem as="li">
              <NavLink href="/logout">
                <Button type="link" size={30}>Logout</Button>
              </NavLink>
            </NavItem>}
          </Nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
