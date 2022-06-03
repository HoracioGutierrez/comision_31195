
const Nav = ({inHeader,cosasParaMostrar,laClase}) => {
  //console.log(laClase)
  //console.log(props.inHeader)
  /* console.log(props)
  console.log(props.cosasParaMostrar) */

  //vamos a sacar cada cosa que venga en props en variables sueltas
  //const {inHeader,cosasParaMostrar} = props
  /* const [] = arr */
  //console.log(inHeader,cosasParaMostrar)

  if (inHeader) {
    return (
      <nav className={laClase}>
        <a href="#">link</a>
        <a href="#">link</a>
        <a href="#">link</a>
      </nav>
    )
  } else {
    return (
      <nav className={laClase}>
        <a href="#">facebook</a>
        <a href="#">instagram</a>
        <a href="#">linkedin</a>
      </nav>
    )
  }
}

export default Nav