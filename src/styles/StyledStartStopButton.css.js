import styled from "styled-components";


const Styles = {
    Container: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        margin-top: 5%;
    `,
    StyledButton: styled.button`
        display: block;
        text-align: center;
        width: 200px;
        height: 50px;
        border-radius: 25px;
        border: 2px solid white;
        &:hover {
            cursor: pointer;
            opacity: 0.9;
        }
        &:active {
            cursor: pointer;
            opacity: 0.8;
        }
    `
}

export default Styles;