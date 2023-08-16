import { React, useState } from 'react';
import NavBar from "../../components/ui/navigation/Navbar"
import RedirectButton from '../../components/ui/navigation/RedirectButton';
import PermanentDrawerLeft from '../../components/ui/navigation/PermanentDrawerLeft';
import art from '../../assets/art.png';
import "./Home.css"
import ResponsiveDrawer from '../../components/ui/navigation/ResponsiveDrawer';
const Home = () => {

    return (
        <>
            <ResponsiveDrawer>
                <div className="img-container">
                    <img className='hero' src={art} alt="" />
                </div>
                <NavBar></NavBar>
            </ResponsiveDrawer>

        </>
    );
};

export default Home;
