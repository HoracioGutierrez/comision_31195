import Nav from "./Nav"

const Header = () => {
  return (
    <header>
      <h1>titulo</h1>
      <Nav 
      inHeader={true}
      cosasParaMostrar={["link1", "link2", "link3"]}
      laClase="navbar-header"
      />
    </header>
  )
}

export default Header