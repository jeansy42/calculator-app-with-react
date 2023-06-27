import { useContext } from "react";
import { ResultContext } from "../context/ResultContext";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ResultContext);
  return (
    <div role="banner" className={`header ${theme}`}>
      <span>calc</span>
      <div className="theme-container">
        <span className="theme">THEME</span>
        <span className={`switch ${theme} `} onClick={toggleTheme}></span>
      </div>
    </div>
  );
};
