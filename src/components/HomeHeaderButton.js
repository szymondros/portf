import React from 'react';
import {Link} from "react-router-dom";

const HomeHeaderButton = ({text}) => {
    return (
        <Link to="/login">{text}</Link>
    );
};

export default HomeHeaderButton;