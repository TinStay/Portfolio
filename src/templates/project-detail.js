import React from "react"
import { Carousel } from "react-bootstrap"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import TechIcon from "../components/Icons/TechIcon"

import Flip from "react-reveal/Flip"
import Fade from "react-reveal/Fade"

const ProjectDetail = ({ data }) => {
  const project = data.markdownRemark
  const images = data ? data.allFile.edges : []

  return (
    <Layout>
      <div className="light-gray-container pt-4 pb-footer">
        <div className="w-lg-90-centered">
          <Link className="btn-go-back text-decoration-none" to="/projects">
            <i className="fas fa-angle-left mb-2 me-1"></i>Go back
          </Link>

          <div className="project-detail-container text-center text-lg-start px-3 pt-3 pb-4 px-md-5 py-md-4">
            <div className="d-md-flex justify-content-between mb-4 w-100">
              <h1 className="heading-project-detail">
                {project !== null && project.frontmatter.title}
              </h1>
              {project !== null && project.frontmatter.siteURL !== "none" ? (
                <Flip right>
                  <div className="my-4 my-md-auto">
                    <a
                      href={project !== null && project.frontmatter.siteURL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-purple-rounded text-decoration-none py-2 px-3 mx-0 "
                    >
                      Visit website
                    </a>
                  </div>
                </Flip>
              ) : null}
            </div>
            <Carousel
              className="carousel-container mb-0"
              fade={true}
              indicators={false}
              nextLabel=""
              prevLabel=""
            >
              {images.length > 0 &&
                images.map((image, idx) => {
                  if (image.node.childImageSharp !== null) {
                    return (
                      <Carousel.Item className="" key={idx}>
                        <Img
                          className="carousel-image"
                          fluid={image.node.childImageSharp.fluid}
                          alt="website"
                        />
                      </Carousel.Item>
                    )
                  } else {
                    return null
                  }
                })}
            </Carousel>

            <div className="row ">
              <div className="project-detail-desc my-4  col-xl-8">
                <h3 className="heading-smaller ">Description</h3>
                <div className="purple-gradient-border-bottom  w-centered-xs-lg-90  "></div>
                <Fade left>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project !== null && project.html,
                    }}
                    className="project-detail-desc-text my-0 line-height"
                  ></div>
                </Fade>
              </div>

              <div className="project-detail-desc my-4 col-xl-4">
                <h3 className="heading-smaller">Tech Stack</h3>
                <div className="purple-gradient-border-bottom  w-centered-xs-lg-90 w-xl-100"></div>
                <Fade right cascade>
                  <div className="row">
                    {project.frontmatter.technologies.map((technology, idx) => {
                      return (
                        <div
                          key={idx}
                          className="col-4 col-md-3 col-xl-4 text-center"
                        >
                          <TechIcon name={technology} />
                        </div>
                      )
                    })}
                  </div>
                </Fade>
              </div>
            </div>
            <div className="row">
              <div className="my-4 col-xl-8">
                <h3 className="heading-smaller">Learning outcome</h3>
                <div className="purple-gradient-border-bottom w-centered-xs-lg-90   "></div>
                <Fade left>
                  <p className="line-height">
                    {project.frontmatter.learningOutcome}
                  </p>
                </Fade>
              </div>
              <div className="my-4 col-xl-4">
                <div className="mb-4 ">
                  <h3 className="heading-smaller">Github repository</h3>
                  <div className="purple-gradient-border-bottom w-centered-xs-lg-90  w-xl-100"></div>
                </div>
                <Fade right>
                  <a
                    className="btn-purple-rounded d-block d-lg-inline d-xl-block text-center text-decoration-none py-2 px-4 "
                    target="_blank"
                    rel="noreferrer"
                    href={project.frontmatter.githubRepo}
                  >
                    View code
                  </a>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectDetailByPath($path: String!, $title: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        siteURL
        githubRepo
        technologies
        learningOutcome
      }
    }
    allFile(
      filter: { relativeDirectory: { eq: $title } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1900, maxHeight: 900) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`

export default ProjectDetail

