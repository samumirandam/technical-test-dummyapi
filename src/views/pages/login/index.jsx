import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginAction } from '@modules/auth/actions';

import Button from '@ui/button';

import './login.scss';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const handleLogin = (event) => {
    dispatch(loginAction({ email }));
    event.preventDefault();
  };

  return (
    <section className="Login">
      <div className="Login__container">
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleLogin}>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button primary type="submit" onClick={() => {}}>
            Iniciar sesión
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
