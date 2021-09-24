import React, {useState, useEffect} from 'react';

const HelpButton = ({setOrganization, currentOrganization, text, textToSet, data}) => {

    const clickHandler = () => {
        setOrganization(textToSet, data);
    }

    useEffect(() => {

    })

    return (
        <div className={currentOrganization === textToSet ? "bordered" : "transparent"} onClick={clickHandler}>{text}</div>
    );
};

export default HelpButton;