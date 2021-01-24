import { Link } from "gatsby"
import Logo from "./logo"
import { Navbar, Nav } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar className="navbar p-0 mt-0" expand="lg">
      <Navbar.Brand href="/" className="py-0">
        <Logo />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-main " />
      <Navbar.Collapse  id="navbar-main ">
        <Nav className="ms-auto ">
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              About me
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/projects/">
              Projects
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact/">
              Contact me
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
