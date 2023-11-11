
import './hero.css'
const Hero = ({perfil}) => {
  const {nombre, imagen, descripcion, contacto} = perfil

  return(

    <section className="hero">
      <h2 className='titulo'> {nombre} </h2>
      <div className="container">
        <div className='profile_info'>
          <p> {descripcion} </p>
          <div className='profile_contact'>
            {
              contacto.map( item => <a key={item.id} href={item.url}> <i className={item.icono}></i></a>)
            }
          </div>
        </div>
        <div className='profile_img'>
          <img src={imagen}/>
        </div>
      </div>
    </section>

  )


}

export default Hero