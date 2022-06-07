
const Nav = ({ inHeader, cosasParaMostrar, laClase }) => {

  return (
    <nav className={laClase}>
      <a href="#">{inHeader ? "link" : "facebook"}</a>
      <a href="#">{inHeader ? "link" : "instagram"}</a>
      <a href="#">{inHeader ? "link" : "linkedin"}</a>
    </nav>
  )
}

export default Nav