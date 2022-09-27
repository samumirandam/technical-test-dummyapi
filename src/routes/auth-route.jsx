import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getAuth, isAuthSuccess } from '@modules/auth/selectors';

const AuthRoute = ({ children }) => {
  const auth = useSelector(getAuth);
  const isSuccess = useSelector(isAuthSuccess);

  if (!auth?.email && !isSuccess) {
    return <Navigate to="/login" />;
  }

  return children;
};

AuthRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthRoute;
