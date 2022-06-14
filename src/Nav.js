import {Link,NavLink} from "react-router-dom"

const Nav = ({ inHeader, laClase }) => {

  return (
    <nav className={laClase}>
      <NavLink to="/categoria/jewelery">{inHeader ? "jewelery" : "facebook"}</NavLink>
      <NavLink to="/categoria/electronics">{inHeader ? "electronics" : "instagram"}</NavLink>
      <NavLink to="/categoria/clothing">{inHeader ? "clothing" : "linkedin"}</NavLink>
    </nav>
  )
}

export default Nav