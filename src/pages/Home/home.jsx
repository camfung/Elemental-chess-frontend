import { React, useState } from 'react';
import NavBar from "../../components/ui/navigation/Navbar"
import RedirectButton from '../../components/ui/navigation/RedirectButton';
import PermanentDrawerLeft from '../../components/ui/navigation/PermanentDrawerLeft';
import { useAuth0 } from '@auth0/auth0-react';
import art from '../../assets/art.png';
import "./Home.css"
import ResponsiveDrawer from '../../components/ui/navigation/ResponsiveDrawer';
const Home = () => {

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const test = async () => {
        console.log("🚀 ~ file: home.jsx:12 ~ Home ~ isAuthenticated:", isAuthenticated)
        console.log(user)
        let token = await getAccessTokenSilently()
        console.log("🚀 ~ file: home.jsx:16 ~ test ~ token:", token)
    }

    return (
        <>
            <ResponsiveDrawer>
                <div className="img-container">
                    <img className='hero' src={art} alt="" />
                </div>
                <button onClick={test}>test</button>
                <NavBar></NavBar>
            </ResponsiveDrawer>

        </>
    );
};

export default Home;
