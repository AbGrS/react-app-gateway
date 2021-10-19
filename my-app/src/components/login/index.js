import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../redux/actions';
import styles from './login.module.css';
import {routes} from '../../routes';

export function Login() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');

  const savedToken = localStorage.getItem('token');

  if(savedToken && !user.tokenExpired){
    return <Redirect to={routes.DASHBOARD}/>
  }

  return (
    <div>
      <div className={styles.row}>
          <input type='text' placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          <input type='password' placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
        <button
          className={styles.loginButton}
          onClick={()=>{dispatch(login({email, password}))}}
        >
          Login
        </button>
        {user.error && "Some Error occurred. Please try again"}
      </div>
    </div>
  );
}
