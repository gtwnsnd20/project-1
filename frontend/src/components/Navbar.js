import React, { useState } from "react";
import axios from 'axios';
import { Nav, NavItem, NavLink, Container, Button,InputGroup,Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { HouseHeartFill, Windows } from 'react-bootstrap-icons';
import { useNavigate,Link } from 'react-router-dom';
import logo from "./Assets/Images/chicken.png";
import MyAvatar from "./Assets/Avatar";
import getCookie from "./Utils/getCookie";


function Navbar() {
  const [terms, setTerms] = useState();
  const [threads,setThreads] = useState();
  //call getCookie to get cookie info
  const cookieInfo = getCookie();
  let isAdmin = false;
  let isLoggedIn=false;
  let username;

  if(cookieInfo !== null) {
    isLoggedIn = true;
    username = cookieInfo.username;
    isAdmin = cookieInfo.is_admin;
  }

  //Redirect handling
  let navigate = useNavigate();
  let routeChange = () =>{
    let path = `/search-threads`;
    console.log(threads)
    navigate(path,{threads});
  }

  //Searchbar for Threads
  function handleSubmit(event) {
    event.preventDefault();
    let params = `?terms=${terms}`
          routeChange();
          window.location.reload(false);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Container className="navbar-brand d-flex align-items-center order-lg-0">
            <img src={logo} alt='' />
            <a href="http://localhost:3000">
              <span className="ms-2 brandname">ReactIT</span>
            </a>
            <InputGroup className="navbar-searchbar">
          
          <Form.Control className="" type="text" placeholder="Search threads..." name="terms" value={terms} onChange={e=>setTerms(e.target.value)}/>
          
                      <Link to='/search-threads'//Link to SearchThreads page
                      state={{SearchTerms: terms}}><InputGroup.Text>
                      <FontAwesomeIcon icon={faSearch} className="navbar-searchicon"/>
                    </InputGroup.Text></Link>
          

        </InputGroup>
          </Container>
        </div>
        <div>
          <Nav className="mx-auto justify-content-end text-center" as="ul">
            <li className="">

            </li>

            <NavItem as="li">
              <NavLink href="/">
                <HouseHeartFill color="#d90429" size={30} />
              </NavLink>
            </NavItem>
            {isLoggedIn && <NavItem as="li">
              <h4 className="navbar-username">{username}</h4>
            </NavItem>}
{/*             {isLoggedIn && <NavItem as="li">
              <NavLink href="/userprofile">
                <MyAvatar />
              </NavLink>
            </NavItem>} */}
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
