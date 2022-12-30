import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AuthContext } from '../contexts/AuthProvider';
import Login from '../pages/Login';

const Main = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {
                user ? <><Navbar />
                    <Outlet /></> : <Login />
            }
        </div>
    );
};

export default Main;