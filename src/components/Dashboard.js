import React from 'react';
import {getAuth, signOut} from "firebase/auth";

const Dashboard = () => {

    const auth = getAuth();

    const logoutHandler = () => {
        signOut(auth).then(() => {
            console.log("wylogowano");
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div>
            <button onClick={logoutHandler}>Wyloguj się</button>
        </div>
    );
};

export default Dashboard;