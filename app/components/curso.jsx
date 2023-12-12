import { useLoaderData } from '@remix-run/react'
import React from 'react'

function Curso({curso}) {
    const {contenido, imagen, titulo} = curso
    console.log("Imagen", imagen)
  return (
    <section className='curso'>
         <style jsx="true">{`
            .curso {
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data[0]?.attributes?.url})
            }
            `}
        </style>
        <div className='contenedor curso-grid'>
            {imagen?.data?.attributes?.url}
            <div className='contenido'>
                <h2 className='heading'>{titulo}</h2>
                <p className='texto'>{contenido}</p>
            </div>
        </div>
    </section>
  )
}

export default Curso