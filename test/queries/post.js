'use strict'

require('module-alias/register')
const m_utils = require('@test/libs/utils')

module.exports = {
  /**
  * Make a graphql query to the API for getting a post by ID
  * @param {string} post_id The id of the post searched
  * @return {Post} The post searched or null
  **/
  get_post_by_id: async ({ post_id }) => {
    return m_utils.getter({
      query: `
        query {
          get_post_by_id(post_id: "${post_id}") {
              title
              content
              deleted
          }
        }`
    })
  }
}