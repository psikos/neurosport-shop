exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading BlogPost", JSON.stringify(result.errors))
  }

  result.data.allContentfulBlogPost.nodes.forEach(post => {
    actions.createPage({
      path: `/blog/${post.slug}/`,
      component: require.resolve("./src/templates/blog-post-template.js"),
      context: {
        slug: post.slug,
      },
    })
  })
  // const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}
