import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const ProjectDetail = ({ data }) => {
  const project = data.markdownRemark

  console.log("data", data)

  return (
    <Layout>
      {/* <SEO title={project.frontmatter.title} /> */}

      <div className="light-gray-container">
        <div className="project-detail-container centered-container-80">
          <h1 className="heading-project-detail">
            {project.frontmatter.title}
          </h1>
          <h3 className="heading-smaller">Week 1</h3>
          <Img
            className="project-card-image"
            fluid={project.frontmatter.mainImage.childImageSharp.fluid}
            alt="project"
          />
          <div className="two-column-grid ">
            <div className="project-detail-desc">
              <h3 className="heading-smaller">Description</h3>
              <div className="purple-gradient-border-bottom"></div>
              <div
                dangerouslySetInnerHTML={{ __html: project.html }}
                className="project-detail-desc-text"
              ></div>
            </div>
            <div className="project-detail-desc">
              <h3 className="heading-smaller">Process</h3>
              <div className="purple-gradient-border-bottom"></div>
              <p className="project-detail-desc-text">
                I decided to write about product recommendations which websites
                use nowadays to collect and display more relevant advertisements
                and Google Maps directions and routing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectDetailByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        siteURL
        githubRepo
        technologies
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
  }
`

export default ProjectDetail
