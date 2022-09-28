import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { setLastUrlAction } from '@modules/nav/actions';
import { getAuth, isAuthSuccess } from '@modules/auth/selectors';
import { getLastUrl } from '@modules/nav/selectors';

const AuthRoute = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const auth = useSelector(getAuth);
  const isSuccess = useSelector(isAuthSuccess);
  const lastUrl = useSelector(getLastUrl);

  if (!auth?.email && !isSuccess && !lastUrl) {
    dispatch(setLastUrlAction(location.pathname));
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    if (location.pathname === lastUrl) {
      dispatch(setLastUrlAction(undefined));
    }
  }, []);

  return children;
};

AuthRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthRoute;
