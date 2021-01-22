import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-light p-0">
      <a href="index.html">
        {/* <img class="logo" src="./Media/logo.png" alt="logo" /> */}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto ">
          <li class="nav-item active">
            <Link className="nav-link" to="/">About me</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/projects/">Projects</Link>
          </li>
          <li class="nav-item">
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
