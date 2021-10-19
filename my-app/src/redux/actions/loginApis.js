import axios from 'axios';

// To navigate around CORS error, I hosted a proxy on Heroku server
// Ideally the backened must allow the cross origin requests by explicitly setting the header ("Access-Control-Allow-Origin": *)
const PROXY = `https://sheltered-mountain-74311.herokuapp.com/`;
const BASE_URL =  `http://35.207.169.147/`;
function addProxy(url){
  return `${PROXY}${BASE_URL}${url}`
}
export function handleLogin({email, password}) {
  return axios.post(addProxy('auth'), {email, password})
  
}

export function fetchResults(token) {
  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
  return axios.get(addProxy('results'))
}


