/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"

import Header from "./Navigation/header"
import "./layout.css"
import "../index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="main" />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer>
          <div className="footer-container">
            <div className="left-side">
              <p>
                <span className="small-icon">
                  <i className="fa fa-envelope"></i>
                </span>{" "}
                marti.staykov@gmail.com
              </p>
              <p>
                <span className="small-icon">
                  <i className="fa fa-phone"></i>
                </span>
                +359 88706 6622{" "}
              </p>
            </div>
            {/* <div className="right-side">
              <a
                className="footer-icon"
                href="https://github.com/TinStay"
                target="_blank"
              >
                <i className="fa fa-github"></i>
              </a>
              <a className="footer-icon" href="#">
                <i className="	fa fa-linkedin"></i>
              </a>
              <a
                className="footer-icon"
                href="https://www.facebook.com/martin.staykov.1/about_work_and_education"
                target="_blank"
              >
                <i className="fa fa-facebook-square "></i>
              </a>
              <a
                className="footer-icon"
                href="https://www.instagram.com/martino_stay/"
                target="_blank"
              >
                <i className="fa fa fa-instagram "></i>
              </a>
              <a
                className="footer-icon"
                href="https://twitter.com/MindFuckerHD"
                target="_blank"
              >
                <i className="fa fa-twitter "></i>
              </a>
            </div> */}
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
