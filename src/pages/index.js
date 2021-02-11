import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Icon from "../components/Icon"

const IndexPage = ({ data }) => {
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
    <Icon name="Adobe Photoshop" />,
    <Icon name="Adobe Experience Design" />,
    <Icon name="React Router" />,
    <Icon name="Heroku" />,
    <Icon name="Visual Studio" />,
    <Icon name="npm" />,
    <Icon name="Netlify" />,
  ]
  return (
    <Layout>
      <SEO title="Home" />
      <div className="light-gray-container">
        <div className=" w-lg-70-centered">
          <div className="row">
            <div className="profile-image-container col-lg-6 order-md-2 px-0">
              <div className="profile-image-circle">
                <Img
                  className="profile-image"
                  fluid={data.tinstayImage.childImageSharp.fluid}
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
      <div className="skills-container py-4">
        <div className="w-70-centered">
          <h1 className="heading-section text-center">My skills</h1>
          <div className="row mb-6">
            <h3 className="heading-smaller">Front-end</h3>
            <div className="purple-gradient-border-bottom mb-3"></div>
            <div className="d-flex justify-content-start flex-wrap">
              {frontendIcons.map((icon, idx) => {
                return (
                  <div
                    key={idx}
                    className="me-2 me-sm-3 me-lg-4 me-xl-auto mb-2"
                  >
                    {icon}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="row mb-6 ">
            <h3 className="heading-smaller">Back-end</h3>
            <div className="purple-gradient-border-bottom mb-3"></div>
            <div className="d-flex justify-content-start flex-wrap">
              {backendIcons.map((icon, idx) => {
                return (
                  <div key={idx} className="me-2 me-sm-3 me-lg-4 me-xl-5 mb-2">
                    {icon}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="row mb-6 ">
            <h3 className="heading-smaller">Other</h3>
            <div className="purple-gradient-border-bottom mb-3"></div>
            <div className="d-flex justify-content-start flex-wrap">
              {otherIcons.map((icon, idx) => {
                return (
                  <div key={idx} className="me-2 me-sm-3 me-lg-4 me-xl-auto mb-2">
                    {icon}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="purple-container pt-5 pb-footer">
        <div className="about-container rounded pt-4 pb-5 px-4  w-lg-90-centered ">
          {/* <div className="purple-line"></div> */}

          <div className="row mb-lg-6">
            <div className="col-md-6 order-2 order-md-2">
              <Img
                className="about-image "
                fluid={data.image1.childImageSharp.fluid}
                alt="Tin Stay"
              />
            </div>
            <div className="col-md-6 text-center text-lg-start px-1 my-auto order-1 order-md-2">
              <h1 className="heading-small my-3 ">Education</h1>
              <p className="blue-font line-height w-lg-90 ">
                Designing and building web applications has been my passion for
                the past 2 years. Learning-By-Doing, in my opinion, is the most
                effective way for acquiring new knowledge as a new developer and
                that is why I focus on building end-to-end web apps.
              </p>
            </div>
          </div>
          <div className="row mb-lg-6 ">
            <div className="col-md-6 text-center text-lg-end px-1 my-auto">
              <h1 className="heading-small my-3">Experience</h1>
              <p className="blue-font line-height w-lg-90 ms-auto">
                My experience as a web developer comes from creating websites
                with appealing mobile first and desktop designs for the
                front-end and stable CRUD and authentication systems for the
                backend.
              </p>
            </div>
            <div className="col-md-6">
              <Img
                className="about-image"
                fluid={data.image2.childImageSharp.fluid}
                alt="Tin Stay"
              />
            </div>
          </div>
          <div className="row mb-lg-6">
            <div className="col-md-6 order-2 order-lg-1">
              <Img
                className="about-image"
                fluid={data.image3.childImageSharp.fluid}
                alt="Tin Stay"
              />
            </div>
            <div className="col-md-6 text-center text-lg-start px-1 my-auto order-1 order-md-2">
              <h1 className="heading-small my-3">Interests</h1>
              <p className="blue-font line-height w-lg-90">
                I am particularly interested in the whole process of building
                web apps- from the development to the deployment and improvement
                of a project. Trying to get better at my work alongside
                discipline and passion get me motivated when I wake up everyday.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query homepageImages {
    tinstayImage: file(relativePath: { eq: "Home/tinstay.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "Home/Studying.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "Home/compPng.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "Home/cliffPng.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
