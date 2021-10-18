import axios from 'axios';

function addProxy(url){
  // To navigate around CORS error, I hosted a proxy on Heroku server
  return `https://sheltered-mountain-74311.herokuapp.com/${url}`
}
export function handleLogin({email, password}) {
  return axios.post(addProxy('http://35.207.169.147/auth'), {email, password})
  
}

export function fetchResults(token) {
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
  return axios.get(addProxy('http://35.207.169.147/results'))
}


