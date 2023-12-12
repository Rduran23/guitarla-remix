import {useLoaderData} from '@remix-run/react'
import {getGuitarras} from '../models/guitarras.server'

import { useOutletContext } from '@remix-run/react'

import Guitarra from '../components/guitarra'
import styles from '../styles/guitarras.css'
import ListadoGuitarras from '../components/listado-guitarras';

export function meta({ matches }) { 
  return [
    { title:'GuitarLa - Tienda de Guitarras'},
    { name: "description", content: 'GuitarLA - Nuestra colección de guitarras' },
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

export async function loader() {
 const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()
  const data = useOutletContext()
  console.log(data)
  return (
    <main className='contenedor'>
     <ListadoGuitarras guitarras={guitarras}/>
    </main>
  )
}

export default Tienda