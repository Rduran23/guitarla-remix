import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/posts.server"
import Post from "../components/post"
import styles from '../styles/blog.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
  ]
}

export function meta({data}) {

  return [
    { title:`GuitarLa - Blog`},
    { name: "description", content: `GuitarLA - Tienda y Blog de guitarras` },
  ];
}

export async function loader(){
  const posts = await getPosts()
  console.log(posts)
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
    <main className='contenedor'>
      <h2 className='heading'>Blog</h2>
      <div className='blog'>
        {posts.map(post => (
          <Post
            key={post.id}
            post={post}
          ></Post>
        ))}
      </div>
    </main>
  )
}

export default Blog