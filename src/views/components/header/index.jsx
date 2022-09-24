import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@ui/button';

import './header.scss';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="Header">
      <Button
        flat
        className="Header__home"
        onClick={() => navigate('/', { replace: true })}
      >
        Petgram
      </Button>
      <nav>
        <ul>
          <li>
            <Button onClick={() => navigate('/login')}>Iniciar sesión</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
