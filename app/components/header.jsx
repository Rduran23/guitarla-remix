import { Link } from "@remix-run/react"
import Logo from '../../public/img/logo.svg'
import Navegacion from "./navegacion"

const Header = () => {

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to='/' className="logo">
          <img className="logo" src={Logo} alt="Imagen Logo"></img>
        </Link>
        <Navegacion/>
      </div>
    </header>
  )
}

export default Header