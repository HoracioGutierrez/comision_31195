import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import { MiProvider } from "./MiContexto"

const App = () => {

  return (
    <BrowserRouter>
      <MiProvider>
        <Header />
        <Main />
      </MiProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App