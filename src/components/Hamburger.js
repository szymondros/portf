import React from 'react';
import styled from "styled-components";

const Hamburger = ({showMenu}) => {
    return (
        <>
            <input type="checkbox" onClick={showMenu} className="home__nav__toggler"/>
            <div className="home__nav__hamburger">
                <div />
            </div>
        </>
    );
};


export default Hamburger;