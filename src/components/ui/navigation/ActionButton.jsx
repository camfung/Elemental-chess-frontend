import React from 'react';
import { useNavigate } from 'react-router-dom';
import imageSrc from '../../../assets/ButtonStandard.png';
import flippedImageSrc from '../../../assets/ButtonStandardflipped.png';
import "./button.css";
import "../../../index.css";

const ActionButton = ({ pageName, label, flipped = false, className = '', onClick }) => {

    return (
        <div className='highlight'>
            <button className={`image-button ${className}`} onClick={onClick}>
                {flipped && <img src={flippedImageSrc} alt="Button Image" />}
                {!flipped && <img src={imageSrc} alt="Button Image" />}

                <span className="button-text">{label}</span>
            </button>
        </div>
    );
};

export default ActionButton;
