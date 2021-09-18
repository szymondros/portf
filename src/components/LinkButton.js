import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import colors from "../settings/colors";

const LinkButton = ({href, isBordered, colored, text, isGrayTextColor, fontSize}) => {
    return (
        <Button to={href}
                $isBordered={isBordered}
                $colored={colored}
                $isGrayTextColor={isGrayTextColor}
                $fontSize={fontSize}
        >{text}</Button>
    );
};

const Button = styled(Link)`
  border: ${({$isBordered}) => $isBordered ? "1px" : "0"} solid ${({$colored}) => $colored};
  text-decoration: none;
  color: ${({$isGrayTextColor}) => $isGrayTextColor ? colors.grayAccentColor : colors.darkAccentColor};
  padding: 5px 15px;
  font-size: ${({$fontSize}) => $fontSize};
`;

export default LinkButton;