import axios from 'axios';

axios.post('http://localhost:5000/api/login', {
  email: 'usuario@email.com',
  password: '12345678'
})
.then(response => {
  console.log('Respuesta del backend:', response.data);
})
.catch(error => {
  console.error('Error al hacer la petición:', error);
});
