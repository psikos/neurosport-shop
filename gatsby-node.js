exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
      allContentfulShopItem {
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

  result.data.allContentfulShopItem.nodes.forEach(shopItem => {
    actions.createPage({
      path: `/shop/${shopItem.slug}/`,
      component: require.resolve("./src/templates/shop-item-template.js"),
      context: {
        slug: shopItem.slug,
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

// exports.onCreateWebpackConfig = ({ actions, stage }) => {
//   if (stage === "develop-html" || stage === "build-html") {
//     actions.setWebpackConfig({
//       resolve: {
//         mainFields: ["main"],
//       },
//     })
//   } else {
//     actions.setWebpackConfig({
//       resolve: {
//         mainFields: ["browser", "module", "main"],
//       },
//     })
//   }
// }
