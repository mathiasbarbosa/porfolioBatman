import React from 'react';

const Section = ({titulo, descripcion, array, children }) => {

  return (
    <section style={{display: 'flex', flexDirection: 'column'}}>
      <h1 className='titulo'>{titulo}</h1>
      <p style={{textAlign: 'center', marginBottom: '1rem', fontSize: '1.2rem'}}>{descripcion}</p>
      {children}
    </section>
  );
}


export default Section;



