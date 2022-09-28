import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginAction } from '@modules/auth/actions';
import {
  getAuth,
  isAuthSuccess,
  getAuthErrorDetail,
  isAuthError,
  isAuthLoading,
} from '@modules/auth/selectors';
import { getLastUrl } from '@modules/nav/selectors';

import Loader from '@components/loader';
import Error from '@components/error';

import Button from '@ui/button';
import Input from '@ui/input';

import './login.scss';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector(getAuth);
  const isSuccess = useSelector(isAuthSuccess);
  const isLoading = useSelector(isAuthLoading);
  const isError = useSelector(isAuthError);
  const errorDetail = useSelector(getAuthErrorDetail);

  const lastUrl = useSelector(getLastUrl);

  const [email, setEmail] = useState('');

  const handleLogin = (event) => {
    dispatch(loginAction({ email }));
    event.preventDefault();
  };

  useEffect(() => {
    if (isSuccess && auth?.email) {
      if (lastUrl) {
        navigate(lastUrl);
      } else {
        navigate('/');
      }
    }
  }, [auth, isSuccess, lastUrl]);

  return (
    <section className="Login">
      <div className="Login__container">
        <h1>Inicio de sesión</h1>
        <form onSubmit={handleLogin}>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button primary type="submit" onClick={() => {}}>
            Iniciar sesión
          </Button>
        </form>
      </div>
      {isLoading && <Loader />}
      {isError && <Error error={errorDetail} />}
    </section>
  );
};

export default Login;
