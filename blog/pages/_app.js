import '../styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const blogpostObject = {
    title: 'this is the title',
    post: 'this is the post'
  }

  const [blogpost, setBlogpost] = useState(blogpostObject)

  return <Component 
            {...pageProps} 
            blogpost={blogpost} 
          />
}
