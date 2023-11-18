import React, {useState} from 'react';
import './cardPrices.css'

const CardPrices = ({nombre, precio, descripcion, plan, id, handleSelected, isActive}) => {

  
  

  const seleccionada = {
    backgroundColor: '#E6D628'
    
  }



  return (


  <div className='cardPrices' onClick={() => handleSelected(id)}>
      <div>
        <h3 className='card-title'>{nombre}</h3>
        <strong className='card-price'> ${precio}.00 <small>/hour</small></strong>
        <p className='card-desc'>{descripcion}</p>
      </div>
      <ul className='card-list'>
        {
          plan.map((item, i) => <li style={{ color: item.estado === false ? '767676' : '$fff'}} key={i}> <i>{item.estado ? '✅' : '❌'} </i>{item.nombre}</li>)
        }
      </ul>
      <button className='card-btn' style={isActive ? seleccionada : null} >Order now</button>
    </div>
  );
}

export default CardPrices;
