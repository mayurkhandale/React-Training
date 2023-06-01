
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NavBar from './NavBar';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
//import { useThemeSwitcher } from "react-css-theme-switcher";
import { Routes, Route, Link } from 'react-router-dom';
import SandSignika from "highcharts/themes/sand-signika";
import DarkUnica from "highcharts/themes/dark-unica";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import './App.css';
import HighchartsExporting from 'highcharts/modules/exporting';
import Dark from './Components/Dark';
import Light from './Components/Light';
import  Comman from './Components/Comman'
HighchartsExporting(Highcharts);
const themes = {

  
  light: SandSignika,
  dark: DarkUnica
};



function App() {
  const [status, setStatus] = useState();
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    console.log('enter')
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeSwitcherProvider defaultTheme={theme} themeMap={themes}>
   
    <div className="App">
      <div className="row">
        <div className="col text-center mt-5">
          <p className="h3 display-3">Crash  <span className="fw-bold">2023</span></p>
        </div>
      </div> 
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<NavBar />}> */}
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
       
      </Routes>

    </div>
    <button onClick={() => changeTheme()}>Change theme</button>
    </ThemeSwitcherProvider>
  );
}

export default App;

