import React from "react";
import Styles from "../styles/Header.css";


const Header = () => {
    const { StyledHeader, Logo  } = Styles
    return (
        <>
            <StyledHeader>
                <Logo>Помодоро</Logo>
            </StyledHeader>
        </>
    )
}


export default Header