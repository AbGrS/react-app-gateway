import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../redux/actions';
import styles from './login.module.css';

export function Login() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const handleLogin = ()=>{
      dispatch(login({email, password}))
  }

  const handleEmailInput = (e)=>{
      setEmail(e.target.value)
  }

  const handlePasswordInput = (e)=>{
      setPassword(e.target.value)
  }

  if((user.tokenReceived || localStorage.getItem('token'))&& !user.tokenExpired){
    return <Redirect to="/dashboard"/>
  }

  return (
    <div>
      <div className={styles.row}>
        <input type='text' placeholder="email" onChange={handleEmailInput}/>
   
        <input type='text' placeholder="password" onChange={handlePasswordInput}/>

        <button
          className={styles.loginButton}
          onClick={handleLogin}
        >
          Login
        </button>
        {user.error && "Some Error occurred. Please try again"}
      </div>
    </div>
  );
}
