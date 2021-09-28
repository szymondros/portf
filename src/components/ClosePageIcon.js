import React, {useMemo} from 'react';
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import "../scss/home/close-page-icon.scss";


const ClosePageIcon = () => {

    useMemo(() => {
        fontawesome.library.add(faTimes);
    }, []);

    return (
        <>
            <Link to="/" className="close-page-icon" >
                <FontAwesomeIcon icon="times"/>
            </Link>
        </>
    );
};

export default ClosePageIcon;