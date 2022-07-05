import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import { MiProvider } from "./MiContexto"
import { useEffect } from "react"
import { useMemo } from "react"
import { useCallback } from "react"
/* import dotenv from "dotenv"

dotenv.config() */

const App = () => {

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    if(loading){
      
    }
  },[])
  //useMemo(()=>{},[])
  //useCallback(()=>{},[])

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