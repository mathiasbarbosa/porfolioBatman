import React, { useState } from 'react';
import Section from '../section/Section'
import { postConsulta } from '../../utils/funciones';
import './form.css'

const estadoInicial = {
  nombre: '',
  mail: '',
  consulta: ''
}

const FormContacto = () => {

  const [datos, setDatos] = useState(estadoInicial)
  const [validarForm, setValidarForm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const {nombre, mail, consulta} = datos
    if (!nombre.trim() ||  !mail.trim() || !consulta.trim() ) {
      setValidarForm(false)
      return null
    }
    setValidarForm(true)
    postConsulta()
  } 

  const handleChange = (evento) =>{
    setDatos({...datos, [evento.target.name] : evento.target.value})
  } 


  const invalidForm = {
    border: '3px solid red'
  }


  return (
    <Section titulo='Contacto' descripcion='Contactate con nosotros'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name='nombre' placeholder='nombre' value={datos.nombre} onChange={(e) =>handleChange(e)} style={!validarForm ? invalidForm : null} /> 
        <input name='mail' placeholder='mail' value={datos.mail}  onChange={(e) =>handleChange(e) } style={!validarForm ? invalidForm : null} />
        <textarea name='consulta' placeholder='Consulta...' value={datos.consulta}  onChange={(e) =>handleChange(e) } style={!validarForm ? invalidForm : null} />
        <button>Enviar consulta</button>
      </form>
    </Section>
  );
}

export default FormContacto;
