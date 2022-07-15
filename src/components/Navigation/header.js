import { Link } from "gatsby"
import NavLink from "./NavLink"
import Logo from "../../images/Logo.svg"
import { Navbar, Nav } from "react-bootstrap"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {

  return (
    <header>
      <Navbar className="navbar py-1 py-lg-0 mt-0" expand="lg">
        <Navbar.Brand href="/" className="py-0">
          <svg width="0" height="0">
            <linearGradient
              id="purpleGradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#ab05f2" offset="0%" />
              <stop stopColor="#5a13f2" offset="100%" />
            </linearGradient>
          </svg>
          <Logo className="logo" viewBox="0 0 100 94" style={{ fill: "url(#purpleGradient)" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-main ">
          {/* <CgMenu className="navbar-hamburger" /> */}
          <div className="hamburger-menu">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </Navbar.Toggle>

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
