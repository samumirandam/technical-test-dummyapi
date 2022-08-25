import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@ui/button";

import "./header.scss";

const Header = () => {
  let navigate = useNavigate();

  return (
    <header className="Header">
      <Button
        flat
        className="Header__home"
        onClick={() => navigate("/", { replace: true })}
      >
        Petgram
      </Button>
      <nav>
        <ul>
          <li>
            <Button>Iniciar sesión</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
