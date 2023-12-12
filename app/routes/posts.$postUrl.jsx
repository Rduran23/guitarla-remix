import { Link, useLoaderData } from '@remix-run/react'
import { getPost } from '../models/posts.server'
import styles from '../styles/blog.css'
import { formatearFecha } from "../utils/helpers"

export async function loader({params}){
  const {postUrl} = params
  const post = await getPost(postUrl)

  if (post.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado'
    })
  }

  return post
}

export function meta({data}) {
  const postName = data.data[0].attributes.titulo || ""

  console.log(postName)

  return [
    { title:`GuitarLa - ${postName}`},
    { name: "description", content: `GuitarLA - ${postName}` },
  ];
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
  ]
}



const Post = () => {
  const post = useLoaderData()
  const {titulo, contenido, imagen, publishedAt} = post?.data[0].attributes
  const imagenSrc = imagen.data.attributes.url

  return (
        <article className="contenedor post mt-3">
            <img className='imagen' src={imagenSrc} alt={`Imagen Blog ${titulo}`}/>
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </article>
    
  )
}

export default Post