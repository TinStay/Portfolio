import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query tinstayImage{
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


  return (
    <Layout>
      <SEO title="Home" />
      <div className="light-gray-container">
        <div className=" w-lg-70-centered">
          <div className="row">
            <div className="col-lg-6 order-lg-2 px-0">
              <div className="profile-image-circle ">
                <Img className="profile-image" fluid={data.image.childImageSharp.fluid} alt="Tin Stay"/>
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
    </Layout>
  )
}

export default IndexPage
