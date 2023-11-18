import React, { useState } from 'react';
import Section from '../section/Section';
import CardPrices from '../cardPrices/CardPrices';
const pricesPlans = [
  {
    id: 1,
    nombre: 'Silver',
    precio: 0.00,
    descripcion: 'For most businesses that want to optimize web queries',
    plan: [
      {
        nombre: "UI Design",
        estado: true
      },
      {
        nombre: "web development",
        estado: true
      },
      {
        nombre: "logo design",
        estado: false
      },
      {
        nombre: "seo optimization",
        estado: false
      },
      {
        nombre: "wordPress integration",
        estado: false
      },
      {
        nombre: "5 Websites",
        estado: false
      },
      {
        nombre: "unlimited user",
        estado: false
      },
      {
        nombre: "20 gB bandwith",
        estado: false
      },
    ]
  },
  {
    id: 2,
    nombre: 'Gold',
    precio: 50.00,
    descripcion: 'For most businesses that want to optimize web queries',
    plan: [
      {
        nombre: "UI Design",
        estado: true
      },
      {
        nombre: "web development",
        estado: true
      },
      {
        nombre: "logo design",
        estado: true
      },
      {
        nombre: "seo optimization",
        estado: true
      },
      {
        nombre: "wordPress integration",
        estado: false
      },
      {
        nombre: "5 Websites",
        estado: false
      },
      {
        nombre: "unlimited user",
        estado: false
      },
      {
        nombre: "20 gB bandwith",
        estado: false
      },
    ]
  },
  {
    id:3,
    nombre: 'Dimond',
    precio: 80.00,
    descripcion: 'For most businesses that want to optimize web queries',
    plan: [
      {
        nombre: "UI Design",
        estado: true
      },
      {
        nombre: "web development",
        estado: true
      },
      {
        nombre: "logo design",
        estado: true
      },
      {
        nombre: "seo optimization",
        estado: true
      },
      {
        nombre: "wordPress integration",
        estado: true
      },
      {
        nombre: "5 Websites",
        estado: true
      },
      {
        nombre: "unlimited user",
        estado: true
      },
      {
        nombre: "20 gB bandwith",
        estado: true
      },
    ]
  }
]

const PricePlans = () => {
  const [cardSeleccionada, setCardSeleccionada] = useState(null)
  // const [isActive, setIsActive] = useState(false)

  const handleSelected = (id) => {
    if(cardSeleccionada !== id){
      // setIsActive(true)
      setCardSeleccionada(id)
    }
  }

  return (
    <Section 
      titulo='Price plans' 
      descripcion='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'
    > 
    <div className="containerCard">
      {
        pricesPlans.map( item => <CardPrices key={item.id} {...item} handleSelected={handleSelected} isActive={item.id === cardSeleccionada}  />)
      }
    </div>
    </Section>
  );
}

export default PricePlans;
