import React from 'react';

const Hamburger = ({showMenu}) => {
    return (
        <>
            <input type="checkbox" onClick={showMenu} className="nav__toggler"/>
            <div className="nav__hamburger">
                <div />
            </div>
        </>
    );
};


export default Hamburger;