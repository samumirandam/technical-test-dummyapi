import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from '@modules/auth/selectors';

import Button from '@ui/button';

import './menu.scss';

const routes = [
  {
    to: '/login',
    text: 'Iniciar sesión',
    private: false,
    publicOnly: true,
  },
  {
    to: '/logout',
    text: 'Cerrar sesión',
    private: true,
  },
];

const Menu = () => {
  const auth = useSelector(getAuth);

  return (
    <nav>
      <ul>
        <li />
        {routes.map((route) => {
          if (route.publicOnly && auth?.email) return null;
          if (route.private && !auth?.email) return null;
          return (
            <li key={route.to}>
              <Link to={route.to}>
                <Button onClick={() => {}}>{route.text}</Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
