export const postConsulta = (body) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => alert('Error al enviar los datos'))
}