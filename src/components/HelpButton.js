import React, {useState, useEffect} from 'react';

const HelpButton = ({setOrganization, currentOrganization, text, textToSet}) => {

    const [active, setActive] = useState(false);

    const clickHandler = () => {
        setOrganization(textToSet);
        setActive(!active);
    }

    useEffect(() => {

    })

    return (
        <div className={currentOrganization === textToSet ? "bordered" : "transparent"} onClick={clickHandler}>{text}</div>
    );
};

export default HelpButton;