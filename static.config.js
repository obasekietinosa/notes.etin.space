import axios from 'axios'
import path from 'path'
import { formatPosts } from './utils'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const { data: {posts} } /* :{ data: Post[] } */ = await axios.get(
      'https://public-api.wordpress.com/rest/v1.1/sites/etinsnotes.wordpress.com/posts/'
    )
    return [
      {
        path: '/',
        getData: () => ({
          posts: formatPosts(posts),
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.slug}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    'react-static-plugin-tailwindcss',
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
