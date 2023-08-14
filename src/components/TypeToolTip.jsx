import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import capitalizeFirstLetter from "../utils/stringUtils";
const TypeToolTip = ({ displayedType, children, delay = 0 }) => {
    const typeLabelStyles = {
        display: "inline-block",
        padding: "4px 8px",
        backgroundColor: "red",
        borderRadius: "4px",
        margin: "0 4px",
        fontSize: "14px",
        fontWeight: "bold",
    };

    const pokemonTypes = {
        "normal": {

            colour: "#aa9",
            none: ["ghost"],
            not: ["rock", "steel"],
            super: [],
        },
        "fire": {

            colour: "#f42",
            none: [],
            not: ["fire", "water", "rock", "dragon"],
            super: ["grass", "ice", "bug", "steel"],
        },
        "water": {

            colour: "#39f",
            none: [],
            not: ["water", "grass", "dragon"],
            super: ["fire", "ground", "rock"],
        },
        "electric": {

            colour: "#fc3",
            none: ["ground"],
            not: ["electric", "grass", "dragon"],
            super: ["water", "flying"],
        },
        "grass": {

            colour: "#7c5",
            none: [],
            not: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"],
            super: ["water", "ground", "rock"],
        },
        "ice": {

            colour: "#6cf",
            none: [],
            not: ["fire", "water", "ice", "steel"],
            super: ["grass", "ground", "flying", "dragon"],
        },
        "fighting": {

            colour: "#b54",
            none: ["ghost"],
            not: ["poison", "flying", "psychic", "bug", "fairy"],
            super: ["normal", "ice", "rock", "dark", "steel"],
        },
        "poison": {

            colour: "#a59",
            none: ["steel"],
            not: ["poison", "ground", "rock", "ghost"],
            super: ["grass", "fairy"],
        },
        "ground": {

            colour: "#db5",
            none: ["flying"],
            not: ["grass", "bug"],
            super: ["fire", "electric", "poison", "rock", "steel"],
        },
        "flying": {

            colour: "#89f",
            none: [],
            not: ["electric", "rock", "steel"],
            super: ["grass", "fighting", "bug"],
        },
        "psychic": {

            colour: "#f59",
            none: ["dark"],
            not: ["psychic", "steel"],
            super: ["fighting", "poison"],
        },
        "bug": {

            colour: "#ab2",
            none: [],
            not: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"],
            super: ["grass", "psychic", "dark"],
        },
        "rock": {

            colour: "#ba6",
            none: [],
            not: ["fighting", "ground", "steel"],
            super: ["fire", "ice", "flying", "bug"],
        },
        "ghost": {

            colour: "#66b",
            none: ["normal"],
            not: ["dark"],
            super: ["psychic", "ghost"],
        },
        "dragon": {

            colour: "#76e",
            none: ["fairy"],
            not: ["steel"],
            super: ["dragon"],
        },
        "dark": {

            colour: "#754",
            none: [],
            not: ["fighting", "dark", "fairy"],
            super: ["psychic", "ghost"],
        },
        "steel": {

            colour: "#aab",
            none: [],
            not: ["fire", "water", "electric", "steel"],
            super: ["ice", "rock", "fairy"],
        },
        "fairy": {

            colour: "#e9e",
            none: [],
            not: ["fire", "poison", "steel"],
            super: ["fighting", "dragon", "dark"],
        },
    };

    return (
        <Tooltip
            disableInteractive
            arrow
            enterDelay={delay}
            enterNextDelay={delay}

            title={
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <Paper elevation={3} style={{ padding: "16px" }}>
                        <div>
                            <h3 style={{ marginBottom: "8px" }}>Super Effective</h3>
                            <div>
                                {pokemonTypes[displayedType]?.super.map((type, i) => (
                                    <span class={capitalizeFirstLetter(type)} key={i} style={typeLabelStyles}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ padding: "16px" }}>
                        <div>
                            <h3 style={{ marginBottom: "8px" }}>No Effect</h3>
                            <div>
                                {pokemonTypes[displayedType]?.none.map((type, i) => (
                                    <span class={capitalizeFirstLetter(type)} key={i} style={typeLabelStyles}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ padding: "16px" }}>
                        <div>
                            <h3 style={{ marginBottom: "8px" }}>Not Very Effective</h3>
                            <div>
                                {pokemonTypes[displayedType]?.not.map((type, i) => (
                                    <span class={capitalizeFirstLetter(type)} key={i} style={typeLabelStyles}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Paper>
                </div>
            }
            placement="top"
        >
            {children}
        </Tooltip>
    );
};

export default TypeToolTip;
