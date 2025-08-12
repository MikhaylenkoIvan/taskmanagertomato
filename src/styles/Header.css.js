import styled from "styled-components";


const Styles = {
    StyledHeader: styled.header`
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        height: 90px;
        padding: 0 40px;
        
    `,
    Logo: styled.h1`
        display: block;
        text-align: center;
        &:hover {
            opacity: 0.9;
            cursor: pointer;
        }
        &:active {
            opacity: 0.8;
            cursor: pointer;
        }
    `
}


export default Styles;