import React from 'react';

import Button from '@ui/button';

import './login.scss';

const Login = () => {
  const handleLogin = () => {};
  return (
    <section className="Login">
      <div className="Login__container">
        <h1>Inicio de sesión</h1>
        <input />
        <Button primary onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </div>
    </section>
  );
};

export default Login;
