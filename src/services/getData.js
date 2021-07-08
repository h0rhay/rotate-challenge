export default function getData(req) {
  return fetch(`https://my-json-server.typicode.com/h0rhay/json-server-mock-api/${req}`)
    .then(res => res.json())
    .catch(err => console.log('Error: ', err))
}
