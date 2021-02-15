
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve('./src/templates/project-detail.js')

  return await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              title
              technologies
              siteURL
              shortDescription
              path
              githubRepo
              position
            }
            
          }
        }
      }
    }
  `).then(res => {
      if(res.errors){
          return Promise.reject("response",res.errors)
      }

      console.log("data", res.data)

      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
              path: node.frontmatter.path,
              context: {
                title: node.frontmatter.title
              },
              component: projectTemplate
          })
      })
  })
}
