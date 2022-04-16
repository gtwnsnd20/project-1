import React from "react";
import { Nav, NavItem, NavLink, Container, Button } from 'react-bootstrap';
import { HouseHeartFill, EnvelopePaperHeartFill, BellFill } from 'react-bootstrap-icons';
import logo from "./Assets/Images/chicken.png";
import MyAvatar from "./Assets/Avatar";
import getCookie from "./Utils/getCookie";

let isAdmin = false;//SEt admin status
function Navbar() {
  //call getCookie to get cookie info
  const cookieInfo = getCookie();
  let isLoggedIn=false;

  if(cookieInfo !== null) {
    isLoggedIn = true;
    isAdmin = cookieInfo.is_admin;
    console.log(isAdmin);

  }

  //navbar when a user is logged in
  const renderLoggedInNav = (
    <div>
      <Nav className="mx-auto justify-content-end text-center" as="ul">
        {isAdmin && <NavItem as="li">
          <NavLink href="/admin">
            <p>Admin Menu</p>
          </NavLink>
        </NavItem>}
        <NavItem as="li">
          <NavLink href="/">
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
        <NavItem>
          <NavLink href="/logout">
            <Button>Logout</Button>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );

  //navbar bit for guest users
  const renderLoggedOutNav = (
    <div>
      <Nav className="mx-auto justify-content-end text-center" as="ul">
        <NavItem as="li">
          <NavLink href="/">
            <HouseHeartFill color="#d90429" size={30} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">
            <Button type="link" size={30}>Login/Register</Button> 
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
  
  //placeholder for coding function to check for an active user and set logged in function true or false


  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Container className="navbar-brand d-flex align-items-center order-lg-0">
            <img src={logo} alt='' />
            <span className="ms-2">ReactIT</span>
          </Container>
        </div>
        <div>
          { isLoggedIn ? renderLoggedInNav : renderLoggedOutNav }
        </div>
      </div>
    </>
  );
}

export default Navbar;
