import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const LinkButton = ({href, isBordered, colored, text}) => {
    return (
        <Button to={href}
                $isBordered={isBordered}
                $colored={colored}
        >{text}</Button>
    );
};

const Button = styled(Link)`
  border: ${({$isBordered}) => $isBordered ? "1px" : "0"} solid ${({$colored}) => $colored};
  text-decoration: none;
  color: black;
  padding: 5px 15px;
`;

export default LinkButton;