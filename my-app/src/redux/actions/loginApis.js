import axios from 'axios';
export function handleLogin({email, password}) {
  debugger;
  return axios.post('http://35.207.169.147/', JSON.stringify({email, password}))
  return fetch('https://api.github.com/users/hadley/orgs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(data)
   // body: JSON.stringify({email, password}) // body data type must match "Content-Type" header
  })
}//http://35.207.169.147/

