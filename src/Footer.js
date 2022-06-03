import Nav from "./Nav"

const Footer = () => {

  return (
    <footer className="footer">
      <p>Copyright &copy;</p>
      <Nav 
      inHeader={false} 
      cosasParaMostrar={["facebook","instagram"]}
      laClase="navbar-footer"
      />
    </footer>
  )
  
}

export default Footer