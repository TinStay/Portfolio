import React from "react"
import { Carousel } from "react-bootstrap"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Icon from "../components/Icon"

// import { ReactIcon } from "@react-icons/all-files/fa/FaReact";
// import { SassIcon } from "@react-icons/all-files/fa/FaSass";
// import { BootstrapIcon } from "@react-icons/all-files/fa/FaBootstrap";
import { ReactIcon, SassIcon, BootstrapIcon } from "@react-icons/all-files"

const ProjectDetail = ({ data }) => {
  const project = data.markdownRemark
  const images = data ? data.allFile.edges : []

  console.log("project.frontmatter.learningOutcome", project.frontmatter)

  return (
    <Layout>
      <div className="light-gray-container pt-4 pb-footer">
        <div className="w-lg-80-centered">
          <Link className="btn-go-back text-decoration-none" to="/projects">
            <i className="fas fa-angle-left mb-2 me-1"></i>Go back
          </Link>

          <div className="project-detail-container ">
            <div className="d-md-flex justify-content-between mb-4 w-100">
              <h1 className="heading-project-detail">
                {project !== null && project.frontmatter.title}
              </h1>
              {project !== null && project.frontmatter.siteURL != "none" ? (
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
              ) : null}
            </div>
            <Carousel
              className="carousel-container"
              fade={true}
              indicators={false}
              nextLabel=""
              prevLabel=""
            >
              {images.length > 0 &&
                images.map((image, idx) => {
                  if (image.node.childImageSharp !== null) {
                    return (
                      <Carousel.Item key={idx}>
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
              <div className="project-detail-desc col-xl-8">
                <h3 className="heading-smaller ">Description</h3>
                <div className="purple-gradient-border-bottom"></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project !== null && project.html,
                  }}
                  className="project-detail-desc-text"
                ></div>
              </div>
              <div className="project-detail-desc col-xl-4">
                <h3 className="heading-smaller">Tech Stack</h3>
                <div className="purple-gradient-border-bottom"></div>
                <div className="row">
                  {project.frontmatter.technologies.map((technology, idx) => {
                    return (
                      <div
                        key={idx}
                        className="col-4 col-md-3 col-xl-4 text-center"
                      >
                        <Icon name={technology} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <h3 className="heading-smaller">Learning outcome</h3>
                <div className="purple-gradient-border-bottom"></div>
                <p>{project.frontmatter.learningOutcome}</p>
              </div>
              <div className="col-xl-4">
                <div>
                  <h3 className="heading-smaller">Github repository</h3>
                  <div className="purple-gradient-border-bottom"></div>
                </div>
                <a
                  className="btn-purple-rounded d-block d-lg-inline d-xl-block text-center text-decoration-none py-2 px-4 "
                  target="_blank"
                  href={project.frontmatter.githubRepo}
                >
                  View code
                </a>
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
        shortDescription
        mainImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: $title } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProjectDetail
