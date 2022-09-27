import React from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '@components/menu';

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
      <Menu />
    </header>
  );
};

export default Header;
