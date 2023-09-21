import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import capitalizeFirstLetter from "../utils/stringUtils";
const TypeToolTip = ({ displayedType, children, delay }) => {
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
            noEffectAttacker: ["ghost"],
            notEffectiveAttacker: ["rock", "steel"],
            superEffectiveAttacker: [],
            superEffectiveDefender: [],
            notVeryEffectiveDefender: [],
            noEffectDefender: ["ghost"],
        },
        "fire": {

            colour: "#f42",
            noEffectAttacker: [],
            notEffectiveAttacker: ["fire", "water", "rock", "dragon"],
            superEffectiveAttacker: ["grass", "ice", "bug", "steel"],
            superEffectiveDefender: ["water", "ground", "rock"],
            notVeryEffectiveDefender: ["fire", "grass", "ice", "bug", "steel", "fairy"],
            noEffectDefender: [],
        },
        "water": {

            colour: "#39f",
            noEffectAttacker: [],
            notEffectiveAttacker: ["water", "grass", "dragon"],
            superEffectiveAttacker: ["fire", "ground", "rock"],

            superEffectiveDefender: ["grass", "electric"],
            notVeryEffectiveDefender: ["water", "ice", "steel", "fire",],
            noEffectDefender: [],
        },
        "electric": {

            colour: "#fc3",
            noEffectAttacker: ["ground"],
            notEffectiveAttacker: ["electric", "grass", "dragon"],
            superEffectiveAttacker: ["water", "flying"],

            superEffectiveDefender: ["ground"],
            notVeryEffectiveDefender: ["electric", "flying", "steel"],
            noEffectDefender: [],
        },
        "grass": {

            colour: "#7c5",
            noEffectAttacker: [],
            notEffectiveAttacker: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"],
            superEffectiveAttacker: ["water", "ground", "rock"],

            superEffectiveDefender: ["fire", "ice", "poison", "flying", "bug"],
            notVeryEffectiveDefender: ["water", "electric", "grass", "ground"],
            noEffectDefender: [],
        },
        "ice": {

            colour: "#6cf",
            noEffectAttacker: [],
            notEffectiveAttacker: ["fire", "water", "ice", "steel"],
            superEffectiveAttacker: ["grass", "ground", "flying", "dragon"],


            superEffectiveDefender: ["fire", "fighting", "rock", "steel"],
            notVeryEffectiveDefender: ["ice"],
            noEffectDefender: [],
        },
        "fighting": {

            colour: "#b54",
            noEffectAttacker: ["ghost"],
            notEffectiveAttacker: ["poison", "flying", "psychic", "bug", "fairy"],
            superEffectiveAttacker: ["normal", "ice", "rock", "dark", "steel"],

            superEffectiveDefender: ["flying", "psychic", "fairy"],
            notVeryEffectiveDefender: ["bug", "rock", "dark"],
            noEffectDefender: [],
        },
        "poison": {

            colour: "#a59",
            noEffectAttacker: ["steel"],
            notEffectiveAttacker: ["poison", "ground", "rock", "ghost"],
            superEffectiveAttacker: ["grass", "fairy"],

            superEffectiveDefender: ["ground", "psychic"],
            notVeryEffectiveDefender: ["grass", "fighting", "poison", "bug", "fairy"],
            noEffectDefender: [],
        },
        "ground": {

            colour: "#db5",
            noEffectAttacker: ["flying"],
            notEffectiveAttacker: ["grass", "bug"],
            superEffectiveAttacker: ["fire", "electric", "poison", "rock", "steel"],

            superEffectiveDefender: ["water", "grass", "ice"],
            notVeryEffectiveDefender: ["poison", "rock"],
            noEffectDefender: ["electric"],
        },
        "flying": {

            colour: "#89f",
            noEffectAttacker: [],
            notEffectiveAttacker: ["electric", "rock", "steel"],
            superEffectiveAttacker: ["grass", "fighting", "bug"],

            superEffectiveDefender: ["electric", "ice", "rock"],
            notVeryEffectiveDefender: ["grass", "fighting", "bug"],
            noEffectDefender: ["ground"],
        },
        "psychic": {

            colour: "#f59",
            noEffectAttacker: ["dark"],
            notEffectiveAttacker: ["psychic", "steel"],
            superEffectiveAttacker: ["fighting", "poison"],

            superEffectiveDefender: ["bug", "ghost", "dark"],
            notVeryEffectiveDefender: ["fighting", "psychic"],
            noEffectDefender: [],
        },
        "bug": {

            colour: "#ab2",
            noEffectAttacker: [],
            notEffectiveAttacker: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"],
            superEffectiveAttacker: ["grass", "psychic", "dark"],

            superEffectiveDefender: ["fire", "flying", "rock"],
            notVeryEffectiveDefender: ["grass", "fighting", "ground"],
            noEffectDefender: [],
        },
        "rock": {

            colour: "#ba6",
            noEffectAttacker: [],
            notEffectiveAttacker: ["fighting", "ground", "steel"],
            superEffectiveAttacker: ["fire", "ice", "flying", "bug"],

            superEffectiveDefender: ["fighting", "ground", "steel", "water", "grass"],
            notVeryEffectiveDefender: ["normal", "fire", "poison", "flying"],
            noEffectDefender: [],
        },
        "ghost": {

            colour: "#66b",
            noEffectAttacker: ["normal"],
            notEffectiveAttacker: ["dark"],
            superEffectiveAttacker: ["psychic", "ghost"],

            superEffectiveDefender: ["ghost", "dark"],
            notVeryEffectiveDefender: ["poison", "bug"],
            noEffectDefender: ["normal", "fighting"],
        },
        "dragon": {

            colour: "#76e",
            noEffectAttacker: ["fairy"],
            notEffectiveAttacker: ["steel"],
            superEffectiveAttacker: ["dragon"],

            superEffectiveDefender: ["ice", "dragon", "fairy"],
            notVeryEffectiveDefender: ["fire", "water", "electric", "grass"],
            noEffectDefender: [],
        },
        "dark": {

            colour: "#754",
            noEffectAttacker: [],
            notEffectiveAttacker: ["fighting", "dark", "fairy"],
            superEffectiveAttacker: ["psychic", "ghost"],

            superEffectiveDefender: ["fighting", "bug", "fairy"],
            notVeryEffectiveDefender: ["ghost", "dark"],
            noEffectDefender: ["psychic"],
        },
        "steel": {

            colour: "#aab",
            noEffectAttacker: [],
            notEffectiveAttacker: ["fire", "water", "electric", "steel"],
            superEffectiveAttacker: ["ice", "rock", "fairy"],

            superEffectiveDefender: ["fire", "fighting", "ground"],
            notVeryEffectiveDefender: ["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"],
            noEffectDefender: ["poison"],
        },
        "fairy": {

            colour: "#e9e",
            noEffectAttacker: [],
            notEffectiveAttacker: ["fire", "poison", "steel"],
            superEffectiveAttacker: ["fighting", "dragon", "dark"],

            superEffectiveDefender: ["poison", "steel"],
            notVeryEffectiveDefender: ["fighting", "bug", "dark"],
            noEffectDefender: ["dragon"],
        },
    };

    return (
        <Tooltip
            disableInteractive
            enterDelay={delay}
            enterNextDelay={delay}
            arrow
            title={
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <Paper elevation={3} style={{ padding: "5px" }}>
                        <div>
                            <h3 style={{ marginBottom: "8px" }}>Super Effective</h3>
                            <div>
                                {pokemonTypes[displayedType]?.superEffectiveAttacker.map((type, i) => (
                                    <span class={capitalizeFirstLetter(type)} key={i} style={typeLabelStyles}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ padding: "5" }}>
                        <div>
                            <h3 style={{ marginBottom: "8px" }}>No Effect</h3>
                            <div>
                                {pokemonTypes[displayedType]?.noEffectAttacker.map((type, i) => (
                                    <span class={capitalizeFirstLetter(type)} key={i} style={typeLabelStyles}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ padding: "5" }}>
                        <div>
                            <h3 style={{ marginBottom: "8px" }}>Not Very Effective</h3>
                            <div>
                                {pokemonTypes[displayedType]?.notEffectiveAttacker.map((type, i) => (
                                    <span class={capitalizeFirstLetter(type)} key={i} style={typeLabelStyles}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ padding: "5" }}>
                        <div>
                            <h3 style={{ marginBottom: "8px" }}>Super Effective Against this type</h3>
                            <div>
                                {pokemonTypes[displayedType]?.superEffectiveDefender.map((type, i) => (
                                    <span class={capitalizeFirstLetter(type)} key={i} style={typeLabelStyles}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ padding: "5" }}>
                        <div>
                            <h3 style={{ marginBottom: "8px" }}>Not Very Effective against this type</h3>
                            <div>
                                {pokemonTypes[displayedType]?.notVeryEffectiveDefender.map((type, i) => (
                                    <span class={capitalizeFirstLetter(type)} key={i} style={typeLabelStyles}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Paper>
                    <Paper elevation={3} style={{ padding: "5" }}>
                        <div>
                            <h3 style={{ marginBottom: "8px" }}>No Effect Against this type</h3>
                            <div>
                                {pokemonTypes[displayedType]?.noEffectDefender.map((type, i) => (
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
