import React from 'react';
import { useNavigate } from 'react-router-dom';
import imageSrc from '../../assets/ButtonStandard.png';
import "./button.css";
import "../../index.css";

const NavButton = ({ pageName, label }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/${pageName}`);
  };

  return (
    <div className='button-container' onClick={handleButtonClick}>
      <img className='button' src={imageSrc} alt={label} />
      {label && <h1 className='button-text'>{label}</h1>}
    </div>
  );
};

export default NavButton;
