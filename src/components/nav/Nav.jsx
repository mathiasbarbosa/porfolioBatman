import './nav.css'

const Nav = ({nombre}) => {

  return(
    <header>
      <h1 className='tituloPrincipal'>{nombre}</h1>
      <nav>
        <ul className='nav'>
          <li className='navItem'><a href="#">Home</a></li> 
          <li className='navItem'><a href="#">Sobre mi</a></li>
          <li className='navItem'><a href="#">Tecnologias</a></li>
          <li className='navItem'><a href="#">Proyectos</a></li>
          <li className='navItem'><a href="#">Formacion academica</a></li>
          <li className='navItem'><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav