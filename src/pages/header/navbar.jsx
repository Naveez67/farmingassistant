import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { FaHome, FaUserCircle } from "react-icons/fa";
import "./nav.css";
import userService from "../../services/UserService";
import { Link } from "react-router-dom";
const Mynavbar = () => {
  const [fixtop, setfix] = useState(false);

  const fn = () => {
    if (window.scrollY > 80) setfix(true);
    else setfix(false);
  };
  const text = () => {
    return <span className="text">Crops</span>;
  };
  const user = () => {
    return <span className="text">Users</span>;
  };
  const acc = () => {
    return <FaUserCircle />
  };
  window.addEventListener("scroll", fn);
  return (
    <div>
      <div style={{ height: "50px", backgroundColor: "green" }}></div>
      <Navbar bg="light" expand="lg" fixed={fixtop ? "top" : ""} className="sh">
        <Container fluid>
          <Navbar.Brand className="text">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ marginLeft: "auto" }}
            >
              <Nav.Link className="text" as={Link} to="/">
                <span style={{ display: "flex", alignItems: "baseline" }}>
                  <FaHome />
                  Home
                </span>
              </Nav.Link>
              <Nav.Link className="text" as={Link} to="/news">
               News
              </Nav.Link>
              <Nav.Link className="text" as={Link} to="/showblog">
                Blog
              </Nav.Link>
              <Nav.Link className="text" as={Link} to="/offices">
                Offices
              </Nav.Link>
              <Nav.Link className="text" as={Link} to="/showrates">
                Market
              </Nav.Link>
              <NavDropdown
                className="text"
                title={user()}
                id="basic-navbar-nav"
              >
                <NavDropdown.Item>
                  <Link to="/showusers"> All</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/showfarmers">Farmers</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/showsuppliers">Suppliers</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/showcustomers">Customers</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text" as={Link} to="/showads">
                Ads
              </Nav.Link>
              <Nav.Link className="text" as={Link} to="/weather">
                Weather
              </Nav.Link>
              
              
              <Nav.Link className="text" as={Link} to="/showhelpposts">
                Help
              </Nav.Link>
              <NavDropdown
                className="text"
                title={text()}
                id="basic-navbar-nav"
              >
                <NavDropdown.Item>
                  <Link to="/all"> All</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/fruits">Fruits</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/vegitable">Vegetables</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/crops">Crops</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/medicinal">Medicinal</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/ornamentals">Ornamentals</Link>
                </NavDropdown.Item>
              </NavDropdown>
              {userService.isnotadmin()?<>
              <Nav.Link className="text" as={Link} to="/complain">
              Complain
            </Nav.Link>
            <Nav.Link className="text" as={Link} to="/mycart">
            Cart
          </Nav.Link></>
            :<></>
            }
              {userService.isLoggedIn()?<>
                
                <Nav.Link className="text" as={Link} to="/notification">
                Notification
              </Nav.Link>
              <NavDropdown
                className="text"
                title={acc()}
                id="basic-navbar-nav"
              >
                <NavDropdown.Item>
                  <Link to="/showprofile"> Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/fruits">Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
              </>:<>
              <Nav.Link className="text" as={Link} to="/register">
                Register
              </Nav.Link>
              <Nav.Link className="text" as={Link} to="/login">
                Login
              </Nav.Link>
              
              </>}
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Mynavbar;
