import { React, useState } from 'react';
import NavBar from "../../components/ui/navigation/Navbar"
import RedirectButton from '../../components/ui/navigation/RedirectButton';
import PermanentDrawerLeft from '../../components/ui/navigation/PermanentDrawerLeft';
import art from '../../assets/art.png';
import LoginModal from '../../components/form/LoginModal/LoginModal';
import GridOfButtons from './GridOfButtons';
import "./Home.css"
const Home = () => {

    return (
        <>
            <PermanentDrawerLeft>
                <div className="img-container">
                    <img className='hero' src={art} alt="" />
                </div>
                <NavBar></NavBar>
                <GridOfButtons></GridOfButtons>
            </PermanentDrawerLeft>
            {/* <LoginModal open={true}></LoginModal> */}
        </>
    );
};

export default Home;
