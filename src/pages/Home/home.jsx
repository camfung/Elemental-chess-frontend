import { React, useState } from 'react';
import NavBar from "../../components/Navbar"
import NavButton from '../../components/ui/RedirectButton';
const Home = () => {

    const [count, setCount] = useState(0);

    const test = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Welcome to My Website</h1>
            <div> count is {count} </div>
            <button onClick={test}>Tests</button>
        </div>
    );
};

export default Home;
