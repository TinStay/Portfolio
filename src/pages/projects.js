import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="light-gray-container">
        <div className="container centered-container-80">
          <h1 className="heading-section">My projects</h1>
          <div className="row project-row">
            {data.allMarkdownRemark.edges.map(project => {
              return (
                <div key={project.node.id} className="col-md-6 col-lg-4 ">
                  <div className="project-card">
                    <Link to={project.node.frontmatter.path}>
                      <Img
                        className="project-card-image"
                        fluid={
                          project.node.frontmatter.mainImage.childImageSharp.fluid
                        }
                        alt="project"
                      />
                    </Link>
                    <div className="project-card-body">
                      <h3 className="project-card-big-text">
                        {project.node.frontmatter.title}
                      </h3>
                      <p className="project-card-small-text">
                        {project.node.frontmatter.shortDescription}
                      </p>
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
    allMarkdownRemark {
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
