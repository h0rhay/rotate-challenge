export default function getProducts() {
  return fetch('https://my-json-server.typicode.com/h0rhay/json-server-mock-api/products')
    .then(res => res.json())
    .catch(err => console.log('Error: ', err))
}
