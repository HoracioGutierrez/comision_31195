import {Link,NavLink} from "react-router-dom"
import CartWidget from "./CartWidget"

const Nav = ({ inHeader, laClase }) => {

  return (
    <nav className={laClase}>
      {inHeader ? <CartWidget/> : null}
      <NavLink to={inHeader ? "/categoria/jewelery" : "http://facebook.com"}>{inHeader ? "jewelery" : "facebook"}</NavLink>
      <NavLink to="/categoria/electronics">{inHeader ? "electronics" : "instagram"}</NavLink>
      <NavLink to="/categoria/clothing">{inHeader ? "clothing" : "linkedin"}</NavLink>
    </nav>
  )
}

export default Nav  