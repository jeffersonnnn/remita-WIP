const { slugify } = require ('./src/util/utilityFunctions');
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle
        })
    }
    
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent)
        const sourceInstanceName = fileNode.sourceInstanceName
    
        // creates slugs like
        //  /articles/some-heading
        const value =
          "articles" === sourceInstanceName
            ? "/" + sourceInstanceName + createFilePath({ node, getNode })
            : createFilePath({ node, getNode })
    
        // createNodeField({
        //   name: `slug`,
        //   node,
        //   value,
        // })
      } else if (node.internal.type === `CollectionsYaml`) {
        // creates slugs like
        //  /collections/some-collection-name
        createNodeField({
          name: `slug`,
          node,
          value: "/collections/",
        })
      }
      
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const docsTemplate = path.resolve('src/templates/docs-template.js')

    const articlePage = path.resolve(`src/templates/article.js`)
    const collectionPage = path.resolve(`src/templates/collection.js`)

    const documents = graphql(`
    {
        allMarkdownRemark{
            edges{
                node{
                    fields {
                        slug
                    }
                }
            }
        }
    }`).then(res => {
        if (res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: docsTemplate,
                context: {
                    // This is for passing content to the component
                    slug: node.fields.slug
                }
            })
        })
    })

    const result = graphql(
        `
          {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  parent {
                    id
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
            allCollectionsYaml {
              edges {
                node {
                  id
                  title
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) return Promise.reject(result.errors)

        // Create article and collection pages.
      const items = result.data.allMarkdownRemark.edges
      const articles = items.filter(
        (item) => item.node.parent.sourceInstanceName === "articles"
      )
      const collections = result.data.allCollectionsYaml.edges
    
      articles.forEach((post, index) => {
        const slug = post.node.fields.slug
    
        createPage({
          path: slug,
          component: articlePage,
          context: {
            slug,
          },
        })
      })

      collections.forEach(({ node }, index) => {
        createPage({
          path: node.fields.slug,
          component: collectionPage,
          context: {
            slug: node.fields.slug,
            collectionId: node.id,
          },
        })
      })

    })

    return Promise.all([documents, result]);
}