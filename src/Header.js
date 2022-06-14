import Nav from "./Nav"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <h1>MercoderLibre</h1>
      </Link>
      <Nav
        inHeader={true}
        laClase="navbar-header"
      />
    </header>
  )
}

export default Header