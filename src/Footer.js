import Nav from "./Nav"

const Footer = () => {

  return (
    <footer className="footer">
      <p>Copyright &copy;</p>
      <Nav 
      inHeader={false} 
      laClase="navbar-footer"
      />
    </footer>
  )
  
}

export default Footer