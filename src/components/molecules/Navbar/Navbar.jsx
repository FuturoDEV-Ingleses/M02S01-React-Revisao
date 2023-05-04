import "./Navbar.css";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../../../assets/logo.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isSelected = (pathname) => {
    return location.pathname === pathname ? "selected" : "";
  };

  const handleClick = (pathname) => {
    navigate(pathname);
  };


  return (
    <nav className="Navbar">
      <img src={logo} alt="Solar Energy logo" onClick={() => navigate('/')} />

      <button className={isSelected('/')} onClick={() => handleClick('/')}>Dashboard</button>
      <button className={isSelected('/unidades')}
        onClick={() => handleClick('/unidades')}>Unidade Consumidora</button>
      <button
        className={isSelected('/cadastro')}
        onClick={() => handleClick('/cadastro')}>Cadastro de Energia Gerada</button>
    </nav>
  )
}
