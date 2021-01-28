import { Link } from "gatsby"
import NavLink from './NavLink'
import Logo from "./logo"
import { Navbar, Nav } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  
  return (
    <header>
      <Navbar className="navbar p-0 mt-0" expand="lg">
        <Navbar.Brand href="/" className="py-0">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-main " />
        <Navbar.Collapse id="navbar-main ">
          <Nav className="ms-auto ">
            <Link className="nav-item" to="/" activeClassName="active-link">
              <span className="nav-link">About</span>
            </Link>

            <NavLink
              className="nav-item"
              to="/projects/"
              // activeClassName="active-link"
            >
              <span className="nav-link">Projects</span>
            </NavLink>
            

            <Link
              className="nav-item"
              to="/contact/"
              activeClassName="active-link"
            >
              <span className="nav-link">Contact</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
