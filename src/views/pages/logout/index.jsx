import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logoutAction } from '@modules/auth/actions';
import {
  getAuth,
  isAuthSuccess,
  getAuthErrorDetail,
  isAuthError,
  isAuthLoading,
} from '@modules/auth/selectors';

import Loader from '@components/loader';
import Error from '@components/error';

import Button from '@ui/button';

import './logout.scss';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector(getAuth);
  const isSuccess = useSelector(isAuthSuccess);
  const isLoading = useSelector(isAuthLoading);
  const isError = useSelector(isAuthError);
  const errorDetail = useSelector(getAuthErrorDetail);

  const handleLogout = (event) => {
    dispatch(logoutAction({ email: auth?.email }));
    event.preventDefault();
  };

  useEffect(() => {
    if (isSuccess && !auth?.email) {
      navigate('/');
    }
  }, [auth, isSuccess]);

  return (
    <section className="Login">
      <div className="Login__container">
        <h1>Cerrar sesión</h1>
        <form onSubmit={handleLogout}>
          <p>Seguto que quieres cerrar sesión</p>
          <Button primary type="submit" onClick={() => {}}>
            Cerrar sesión
          </Button>
        </form>
      </div>
      {isLoading && <Loader />}
      {isError && <Error error={errorDetail} />}
    </section>
  );
};

export default Logout;
