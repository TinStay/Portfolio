import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Icon from "../components/Icon"

const IndexPage = ({data}) => {
  // const data = useStaticQuery(graphql`
  //   query tinstayImage {
  //     allFile(filter: { relativeDirectory: { eq: "Home" } }) {
  //       edges {
  //         node {
  //           id
  //           childImageSharp {
  //             fluid {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //           name
  //         }
  //       }
  //     }
  //   }
  // `)

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

  let tinstayImage = null

  useEffect(() => {
    
    data.allFile.edges.map(image => {
      switch (image.node.name) {
        case "tinstay":
          tinstayImage = image.node.childImageSharp.fluid
          break;
  
        case "compPng":
          tinstayImage = image.node.childImageSharp.fluid
          break;
  
        case "Studying":
          tinstayImage = image.node.childImageSharp.fluid
          break;
  
        case "cliffPng":
          tinstayImage = image.node.childImageSharp.fluid
          break;
          
        default:
          break
      }
    })

    

  })

  console.log(tinstayImage)

  

  return (
    <Layout>
      <SEO title="Home" />
      <div className="light-gray-container">
        <div className=" w-lg-70-centered">
          <div className="row">
            <div className="profile-image-container col-lg-6 order-lg-2 px-0">
              <div className="profile-image-circle">
                {/* <Img
                  className="profile-image"
                  fluid={data.image.childImageSharp.fluid}
                  alt="Tin Stay"
                /> */}
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
      <div className="skills-container pt-4">
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
                  <div key={idx} className="me-2 me-sm-3 me-lg-4 me-xl-5 mb-2">
                    {icon}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="purple-container pt-5 pb-footer">
        <div className="about-container w-lg-80-centered ">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <h1>Studies</h1>
              <p>
                Designing and building web applications has been my passion for
                the past 2 years. Learning-By-Doing, in my opinion, is the most
                effective way for acquiring new knowledge as a new developer and
                that is why I focus on building end-to-end web apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
    query tinstayImage {
      allFile(filter: { relativeDirectory: { eq: "Home" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
`

export default IndexPage
