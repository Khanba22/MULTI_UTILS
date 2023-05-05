import Navbar from './components/Navbar';
import './App.css';
import { useState } from "react";
import Calculator from './components/Calculator'
import Textutility from './components/Textutility'
import React from "react";
import AboutUs from './components/AboutUs';
import Home from './Home';



function App() {
  const [mode, setMode] = useState("dark");
  const [tab, setTab] = useState(<Home mode={mode}/>);
  const [str, setStr] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setStr("light");
    } else {
      setMode("light");
      setStr("dark");
    }
  }

  const selectTab = (event) => {
    let comp;
    if (event.target.value === "tab1") {
      comp = <Home mode={mode}/>
    }
    if (event.target.value === "tab2") {
      comp = <Textutility />
    }
    if (event.target.value === "tab3") {
      comp = <Calculator />

    }
    if (event.target.value === "tab4") {
      comp = <AboutUs />
    }
    setTab(comp);
  }

  return (
    <>
      <body data-bs-theme={`${mode}`} >
        <Navbar selectTab={selectTab} toggleMode={toggleMode} mode={str} />
        <div className="container" >
          {tab}
        </div>
      </body>
    </>
  );
}

export default App;
