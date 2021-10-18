import axios from 'axios';

export function handleLogin({email, password}) {
  return axios.post('https://cors-anywhere.herokuapp.com/'+'http://35.207.169.147/auth', {email, password})
  return axios.get('https://api.github.com/users/hadley/orgs');
  return fetch('https://api.github.com/users/hadley/orgs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(data)
   // body: JSON.stringify({email, password}) // body data type must match "Content-Type" header
  })
}

export function fetchResults(token) {
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
  return axios.get('https://cors-anywhere.herokuapp.com/'+'http://35.207.169.147/results',)
}


