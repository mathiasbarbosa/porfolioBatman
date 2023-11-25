import { useEffect, useState } from "react"
import Nav  from "./components/nav/Nav"
import Hero from './components/hero/Hero'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import MyServices from "./components/myServices/MyServices"
import PricePlans from "./components/pricesPlans/PricePlans"
import FormContacto from "./components/contacto/FormContacto"


function App() {

  const [perfil, setPerfil] = useState()

  useEffect( () => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setPerfil(data))
  }, [])


  return (
    <>
      {
        perfil ? (<> 
                  <Nav nombre={perfil.nombre} /> 
                  <Hero perfil={perfil} />
                  <MyServices />
                  <PricePlans />
                  <FormContacto />
                  </>
                  )
        : <h1>cargando...</h1>
      }
      
    </>
  )
}

export default App
