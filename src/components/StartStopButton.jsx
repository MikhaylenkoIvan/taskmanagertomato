import React, { useState } from "react";
import Styles from "../styles/StyledStartStopButton.css";


const StartStopButton = () => {
    let [state, setState] = useState(false)
    const { Container, StyledButton } = Styles;
    const changeState = () => {
        setState(prev => !prev);
    }
    return (
        <>
            <Container>
                {!state ? <StyledButton onClick={changeState}>Старт</StyledButton> : <StyledButton style={{ marginTop: '5px', height: '45px' }} onClick={changeState}>Пауза</StyledButton>}
            </Container>
        </>
    )
}

export default StartStopButton;