import { React, useState, useRef } from 'react';
import NavBar from "../../components/ui/navigation/Navbar"
import RedirectButton from '../../components/ui/navigation/RedirectButton';
import ResponsiveDrawer from '../../components/ui/navigation/ResponsiveDrawer';
import art from '../../assets/art.png';
import ChessboardWrapper from '../../components/ChessBoard/ChessBoardWrapper';
import "./Play.css"
import BoardView from '../../components/ChessBoard/BoardView';
import TabPanel from '../../components/ChessBoard/TabPanel';
import * as Chess from '../../chess.mjs';

const Play = () => {

    let whiteElements = [
        ["Electric","Ground","Rock","Fire","Flying","Grass","Ice","Dark"],["Psychic","Water","Fairy","Normal","Dragon","Fighting","Poison","Ghost"]
    ];


    let blackElements = [
        ["Grass", "Psychic", "Dark", "Ice", "Steel", "Flying", "Fighting", "Bug"], ["Electric", "Fairy", "Ground", "Ghost", "Poison", "Dragon", "Rock", "Water"]
    ];

    const chess = useRef(new Chess.Chess(whiteElements, blackElements));

    return (
        <>
            <ResponsiveDrawer>
                <div className="play">
                    <BoardView chess = {chess}></BoardView>

                    <TabPanel chess = {chess}></TabPanel>
                </div>
            </ResponsiveDrawer>

        </>
    );
};

export default Play;
