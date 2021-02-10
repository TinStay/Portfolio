import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Icon from "../components/Icon"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query tinstayImage {
      image: file(relativePath: { eq: "tinstay.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const frontendIcons = [
    <Icon name="HTML" />,
    <Icon name="CSS" />,
    <Icon name="Bootstrap" />,
    <Icon name="JavaScript" />,
    <Icon name="React" />,
    <Icon name="Redux" />,
    <Icon name="Gatsby" />,
  ]

  const backendIcons = [
    <Icon name="Python" />,
    <Icon name="Django" />,
    <Icon name="Firebase" />,
  ]

  const otherIcons = [
    <Icon name="Sass" />,
    <Icon name="Heroku" />,
    <Icon name="Adobe Experience Design" />,
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <div className="light-gray-container">
        <div className=" w-lg-70-centered">
          <div className="row">
            <div className="profile-image-container col-lg-6 order-lg-2 px-0">
              <div className="profile-image-circle">
                <Img
                  className="profile-image"
                  fluid={data.image.childImageSharp.fluid}
                  alt="Tin Stay"
                />
              </div>
            </div>
            <div className="main-text col-lg-6 order-lg-1 px-0">
              <h1 className="heading-tin-stay mx-auto">Tin Stay</h1>
              <h2 className="heading-small">A Web developer</h2>
              <h2 className="heading-small">and a problem solver</h2>
              <div className="jumbotron-buttons d-flex justify-content-center">
                <Link to="/projects/" className="btn-jumbotron-full">
                  Projects
                </Link>
                <a
                  href="./Prototyping/Martin Staykov CV.docx"
                  download
                  className="btn-jumbotron"
                >
                  Get CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="w-70-centered">
          <h1 className="heading-section text-center">My skills</h1>
          <div className="row mb-6">
            <h3 className="heading-smaller">Front-end</h3>
            <div className="purple-gradient-border-bottom mb-3"></div>
            <div class="d-flex justify-content-start flex-wrap">
              {frontendIcons.map(icon => {
                return (
                  <div key={icon} className="me-2 me-sm-3 me-lg-4 me-xl-auto mb-2">
                    {icon}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="row mb-6 ">
            <h3 className="heading-smaller">Back-end</h3>
            <div className="purple-gradient-border-bottom mb-3"></div>
            <div class="d-flex justify-content-start flex-wrap">
              {backendIcons.map(icon => {
                return (
                  <div key={icon} className="me-2 me-sm-3 me-lg-4 me-xl-5 mb-2">
                    {icon}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="row mb-6 ">
            <h3 className="heading-smaller">Other</h3>
            <div className="purple-gradient-border-bottom mb-3"></div>
            <div class="d-flex justify-content-start flex-wrap">
              {otherIcons.map(icon => {
                return (
                  <div key={icon} className="me-2 me-sm-3 me-lg-4 me-xl-5 mb-2">
                    {icon}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
