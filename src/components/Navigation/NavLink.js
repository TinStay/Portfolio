import React from "react"
import { Link } from "gatsby"

const invalidPaths = ["/contact/", "/"]

const isActive = ({ location }) => {
  if (!invalidPaths.includes(location.pathname)) {
    return { className: "nav-item active-link" }
  }

  return null
}

const NavLink = ({ children, ...props }) => (
  <Link getProps={isActive} {...props} >
    {children}
  </Link>
)

export default NavLink
