import React from "react";
import Header from "./components/Header";
import Timer from "./components/Timer";
import StartStopButton from "./components/StartStopButton";


const App = () => {
  return (
    <>
      <Header />
      <Timer />
        <StartStopButton />
    </>
  )
}


export default App