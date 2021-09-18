import React from 'react';
import styled from "styled-components";
import LinkButton from "./LinkButton";
import colors from "../settings/colors";

const HomeSignNav = () => {
    return (
        <SignNavBox>
            <LinkButton href="/login"
                        text="Zaloguj"
                        isGrayTextColor
                        fontSize="13px"
            />
            <LinkButton href="/sign-up"
                        text="Załóż konto"
                        isGrayTextColor
                        isBordered
                        colored={colors.yellowAccentColor}
                        fontSize="13px"
            />
        </SignNavBox>
    );
};

const SignNavBox = styled.div`
  padding: 20px 0 10px 0;
  display: flex;
  justify-content: flex-end;
`;


export default HomeSignNav;