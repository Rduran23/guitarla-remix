
import stylesGuitarras from '../styles/guitarras.css'
import stylesBlogs from '../styles/blog.css'
import stylesCurso from '../styles/curso.css'
import { useLoaderData } from '@remix-run/react'
import {getGuitarras} from '../models/guitarras.server'
import {getPosts} from '../models/posts.server'
import {getCurso} from '../models/curso.server'

import ListadoGuitarras from '../components/listado-guitarras'
import Post from '../components/post'
import Curso from '../components/curso'

export async function loader({params}){
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
 
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}

export function links(){
  return [
    { rel: 'stylesheet', href: stylesGuitarras},
    { rel: 'stylesheet', href: stylesBlogs},
    { rel: 'stylesheet', href: stylesCurso},
  ]
}

export function meta({data}) {

  return [
    { title:`GuitarLa`},
    { name: "description", content: `GuitarLA - Tienda y Blog de guitarras` },
  ];
}

function Index() {
  const {guitarras, posts, curso} = useLoaderData()
  console.log(guitarras)
  console.log(posts)
  return (
   <>
    <main className='contenedor'>
      <ListadoGuitarras
        guitarras={guitarras}
      ></ListadoGuitarras>
    </main>

    <Curso curso={curso.attributes}/>

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
   </>
  )
}

export default Index