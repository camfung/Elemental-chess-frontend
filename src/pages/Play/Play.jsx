import { React, useState } from 'react';
import NavBar from "../../components/ui/navigation/Navbar"
import RedirectButton from '../../components/ui/navigation/RedirectButton';
import PermanentDrawerLeft from '../../components/ui/navigation/PermanentDrawerLeft';
import art from '../../assets/art.png';
import ChessboardWrapper from '../../components/ChessBoard/ChessBoardWrapper';
import "./Play.css"
import BoardView from '../../components/ChessBoard/BoardView';
import TabPanel from '../../components/ChessBoard/TabPanel';
const Play = () => {

    return (
        <>
            <PermanentDrawerLeft>
                <div style={{ display: "flex", flexDirection: "row" }} className="play">
                    <BoardView></BoardView>

                    <TabPanel></TabPanel>`
                </div>
            </PermanentDrawerLeft>

        </>
    );
};

export default Play;
