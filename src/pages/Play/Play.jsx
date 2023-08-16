import { React, useState } from 'react';
import NavBar from "../../components/ui/navigation/Navbar"
import RedirectButton from '../../components/ui/navigation/RedirectButton';
import ResponsiveDrawer from '../../components/ui/navigation/ResponsiveDrawer';
import art from '../../assets/art.png';
import ChessboardWrapper from '../../components/ChessBoard/ChessBoardWrapper';
import "./Play.css"
import BoardView from '../../components/ChessBoard/BoardView';
import TabPanel from '../../components/ChessBoard/TabPanel';

const Play = () => {

    return (
        <>
            <ResponsiveDrawer>
                <div className="play">
                    <BoardView></BoardView>

                    <TabPanel></TabPanel>
                </div>
            </ResponsiveDrawer>

        </>
    );
};

export default Play;
