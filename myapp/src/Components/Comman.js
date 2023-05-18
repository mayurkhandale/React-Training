import React from 'react'
import { useThemeSwitcher } from "react-css-theme-switcher";
import Dark from './Dark';
import Light from './Light';
export default function Comman() {
    const { currentTheme } = useThemeSwitcher();
  return (
    <div>{currentTheme === "dark" ? <Dark/>:<Light/>}</div>
  )
}
