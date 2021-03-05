import axios from 'axios';

function getProducts(){
    axios.get('http://localhost:5000/api/products')
    .then(response => console.log(response.data))
  }