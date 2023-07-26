// ButtonCluster.js
import React from 'react';
import RedirectButton from './RedirectButton'; // Make sure to import the RedirectButton component or update the path accordingly
import './ButtonCluster.css'

const ButtonCluster = ({ label1, label2, label3, label4 }) => {
    return (
        <>
            <div className='button-group'>
                <RedirectButton label={label1}></RedirectButton>
                <RedirectButton label={label2} flipped></RedirectButton>
            </div>

            <div className='button-group' id='right-button-group'>
                <RedirectButton label={label3}></RedirectButton>
                <RedirectButton label={label4} flipped></RedirectButton>
            </div>
        </>
    );
};

export default ButtonCluster;
