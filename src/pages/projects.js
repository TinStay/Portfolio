import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="light-gray-container pt-4 pb-footer">
        <div className="container w-lg-90-centered">
          <h1 className="heading-section text-center">My projects</h1>
          <div className="row project-row equal">
            {data.allMarkdownRemark.edges.map(project => {
              return (
                <div
                  key={project.node.id}
                  className="col-md-6 col-lg-4 px-0 px-sm-2 mb-5 ps-lg-0 "
                >
                  <div className="project-card  mx-lg-2 mb-2">
                    <Link to={project.node.frontmatter.path}>
                      <div className="project-card-purple-bgc">
                        <Img
                          className="project-card-image"
                          fluid={
                            project.node.frontmatter.mainImage.childImageSharp
                              .fluid
                          }
                          alt="project"
                        />
                      </div>
                    </Link>
                    <div className="project-card-body text-center">
                      <h3 className="project-card-big-text">
                        {project.node.frontmatter.title}
                      </h3>
                      <p className="project-card-small-text">
                        {project.node.frontmatter.shortDescription}
                      </p>
                      <Link
                        className="btn btn-purple-rounded py-1 px-3 my-2 "
                        to={project.node.frontmatter.path}
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___position, order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            technologies
            siteURL
            shortDescription
            path
            githubRepo
            position
            mainImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Projects
