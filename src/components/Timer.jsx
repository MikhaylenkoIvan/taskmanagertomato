import React from "react";
import Styles from "../styles/Timer.css"


const Timer = () => {
    const { StyledTimer, TimerContainer } = Styles
    return (
        <>
            <TimerContainer>
                <StyledTimer>20</StyledTimer>
                <StyledTimer>00</StyledTimer>
            </TimerContainer>
        </>
    )
}


export default Timer;