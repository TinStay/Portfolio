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

import { MdEmail } from "react-icons/md"
import { AiFillPhone } from "react-icons/ai"
import { FaGithub, FaFacebookSquare } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"

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
        className="layout-container"
      >
        <main>{children}</main>
        <footer>
          <div className="footer-container d-md-flex justify-content-between">
            <div className="mb-4 mb-md-0">
              <p className="small-icon mb-3">
                <MdEmail /> <span className="text-small">marti.staykov@gmail.com</span> 
              </p>
              <p className="small-icon mb-3">
                <AiFillPhone /> <span className="text-small">+359 88706 6622</span> 
              </p>
            </div>
            <div className="d-flex justify-content-between text-center">
              <a
                className="footer-icon"
                href="https://github.com/TinStay"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="footer-icon"
                href="https://www.linkedin.com/in/martin-staykov-25993b184/"
                target="_blank"
              >
                <GrLinkedin />
              </a>
              <a
                className="footer-icon"
                href="https://www.facebook.com/martin.staykov.1/about_work_and_education"
                target="_blank"
              >
                <FaFacebookSquare />
              </a>
              {/* <a
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
              </a> */}
            </div>
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
