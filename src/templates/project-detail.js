import React from "react"
import { Carousel } from "react-bootstrap"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import TechIcon from "../components/Icons/TechIcon"

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
        <div className="w-lg-90-centered">
          <Link className="btn-go-back text-decoration-none" to="/projects">
            <i className="fas fa-angle-left mb-2 me-1"></i>Go back
          </Link>

          <div className="project-detail-container text-center text-lg-start px-3 pt-3 pb-4 px-md-5 py-md-4">
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: project !== null && project.html,
                  }}
                  className="project-detail-desc-text my-0 "
                ></div>
              </div>

              <div className="project-detail-desc my-4 col-xl-4">
                <h3 className="heading-smaller">Tech Stack</h3>
                <div className="purple-gradient-border-bottom  w-centered-xs-lg-90 w-xl-100"></div>
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
              </div>
            </div>
            <div className="row">
              <div className="my-4 col-xl-8">
                <h3 className="heading-smaller">Learning outcome</h3>
                <div className="purple-gradient-border-bottom w-centered-xs-lg-90   "></div>
                <p className="">{project.frontmatter.learningOutcome}</p>
              </div>
              <div className="my-4 col-xl-4">
                <div className="mb-4 ">
                  <h3 className="heading-smaller">Github repository</h3>
                  <div className="purple-gradient-border-bottom w-centered-xs-lg-90  w-xl-100"></div>
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

{
  /* <button
              className="btn btn-link d-lg-none dark-blue-font no-outline"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#carouselModal"
            >
              View fullscreen
            </button>
            <div
              className="modal fade"
              id="carouselModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      {project !== null && project.frontmatter.title}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
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
                  </div>
                </div>
              </div>
            </div> */
}
