import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/actions';
import styles from './login.module.css';

export function Login() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleLogin = ()=>{
      dispatch(login({email, password}))
  }

  const handleEmailInput = (e)=>{
      setEmail(e.target.value)
  }

  const handlePasswordInput = (e)=>{
      setPassword(e.target.value)
  }

  return (
    <div>
      <div className={styles.row} style={{marginTop: '100px'}}>
        <input type='text' style={{margin: '5px', padding: '10px'}} placeholder="email" onChange={handleEmailInput}/>
   
        <input type='text' style={{margin: '5px', padding: '10px'}} placeholder="password" onChange={handlePasswordInput}/>

        <button
          className={styles.asyncButton}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
