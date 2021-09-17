import React from 'react';
import styled from "styled-components";
import LinkButton from "./LinkButton";

const HomeSignNav = () => {
    return (
        <SignNavBox>
            <LinkButton href="/login"
                        text="Zaloguj"
                        isBordered
                        colored="blue"/>

            <LinkButton href="/sign-up"
                        text="Zarejestruj"/>
        </SignNavBox>
    );
};

const SignNavBox = styled.div`
  padding: 20px 0;
  display: block;
`;


export default HomeSignNav;