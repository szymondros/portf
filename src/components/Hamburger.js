import React from 'react';

const Hamburger = ({showMenu, toggleClass}) => {
    return (
        <>
            <div onClick={showMenu} className={toggleClass}>
                <div />
            </div>
        </>
    );
};


export default Hamburger;