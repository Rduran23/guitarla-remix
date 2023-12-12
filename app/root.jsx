import { useState, useEffect } from 'react'
import { Meta, Links, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link } from '@remix-run/react'
import styles from './styles/index.css'

import Header from './components/header'
import Footer from './components/footer'

export function meta({error}) {
    if (error?.status === 404){
        return [
            {
                title: `GuitarLa - ${error.statusText}`,
            }
        ]
    }
    return [
        {
            title: 'GuitarLa - Remix',
        }
    ]
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
        },
    ]
}

export default function App() {
    const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect( () => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = guitarra => {
        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
        } else{
            // Registro nuevo
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoActualizado)
    }
    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
                <meta charSet='utf-8'/>
                <meta name="viewport"content="width=device-width, initial-scale=1"/>
                <Meta />
                <Links/>
                
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

/** Manejo de errores */

export function ErrorBoundary() {
    const error = useRouteError()
    if (isRouteErrorResponse(error)){
        return (
            <Document>
                <p className='error'>
                    {error.status} {error.statusText}
                    <Link className='error-enlace' to='/'>Volver a la página principal</Link>
                </p>
            </Document>
        )
    }
}