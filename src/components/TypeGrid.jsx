import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import typeButton from '../assets/typeButton.png';
import "../pages/TeamBuilder/GridOfButtons.css"
import "../index.css"
import TypeToolTip from "./TypeToolTip";
import { PokemonTypes } from "../utils/Enums";
import capitalizeFirstLetter from "../utils/stringUtils";
import "../index.css"
const TypeGrid = () => {

    const typeLabelStyles = {
        display: "inline-block",
        padding: "4px 8px",
        backgroundColor: "red",
        borderRadius: "4px",
        margin: "0 4px",
        fontSize: "14px",
        fontWeight: "bold",
    };

    const pokemonTypes = Object.values(PokemonTypes);
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {pokemonTypes.map((item, index) => (
                <TypeToolTip delay={0} displayedType={item.toLowerCase()}>

                    <button className='image-button'>
                        <img className={`typeButton ${capitalizeFirstLetter(item)}`} src={typeButton} />
                        <span className="button-text type-text">{capitalizeFirstLetter(item)}</span>
                    </button>
                </TypeToolTip>

            ))}
        </div>
    );
};

export default TypeGrid;
