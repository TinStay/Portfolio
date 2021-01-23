import { Link } from "gatsby"
import Logo from './logo'
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header >
    <nav className="navbar navbar-expand-lg navbar-light p-0">
      <a href="/">
        <Logo />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto d-flex">
          <li className="nav-item active">
            <Link className="nav-link" to="/">About me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects/">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact/">Contact me</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
