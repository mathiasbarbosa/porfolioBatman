import React from 'react';
import Section from '../section/Section';
import CardServices from '../cardServices/CardServices';
const myServices = [
  { 
    id: 1,
    icono: 'http://placekitten.com/200/200',
    titulo: 'Batseñal',
    descripcion: 'Proyectamos la Batseñal en el cielo para llamar a Batman en cualquier emergencia.'
  },
  {
    id: 2,
    icono: 'http://placekitten.com/200/200',
    titulo: 'Batmóvil',
    descripcion: 'Servicio de transporte de alta velocidad, equipado con la última tecnología para perseguir a los criminales.'
  },
  {
    id: 3,
    icono: 'http://placekitten.com/200/200',
    titulo: 'Batarangs',
    descripcion: 'Artefactos afilados y aerodinámicos lanzados por Batman para incapacitar a los villanos.'
  },
  {
    id: 4,
    icono: 'http://placekitten.com/200/200',
    titulo: 'Bat-Traje',
    descripcion: 'Traje altamente tecnológico que brinda a Batman fuerza, agilidad y protección en la lucha contra el crimen.'
  },
  {
    id: 5,
    icono: 'http://placekitten.com/200/200',
    titulo: 'Bat-Computadora',
    descripcion: 'Sistema informático avanzado utilizado por Batman para analizar datos y resolver crímenes.'
  },
  {
    id: 6,
    icono: 'http://placekitten.com/200/200',
    titulo: 'Bat-Computadora',
    descripcion: 'Sistema informático avanzado utilizado por Batman para analizar datos y resolver crímenes.'
  }

]

const MyServices = () => {
  return (
    <Section titulo="My services" descripcion="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" array={myServices}> 
                  <div className="containerCard">
                    {
                      myServices.map( item => <CardServices key={item.id} {...item} /> )
                    }
                  </div>
    </Section>
  );
}

export default MyServices;
