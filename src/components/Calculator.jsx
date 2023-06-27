import { useState, useEffect } from "react";
import { ResultContext } from "../context/ResultContext";
import { Header } from "./Header";
import { Display } from "./Display";
import { Buttons } from "./ButtonsContainer";

export const Calculator = () => {
  const [result, setresult] = useState("0");
  const [theme, settheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches)
      return "light";
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "violet";
    else return "";
  });
  let l = result.length - 1;

  const toggleTheme = () => {
    if (theme === "") settheme("light");
    else if (theme === "light") settheme("violet");
    else settheme("");
  };
  useEffect(() => {
    if (theme === "light")
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    else if (theme === "violet")
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    else document.body.style.backgroundColor = "";
  }, [theme]);

  useEffect(() => {
    if (!result.includes("e")) {
      let okresult = result;

      okresult = okresult.replace(/,/g, "");

      const regex = /(-?\d+)(\.\d+)?/g;
      setresult(
        okresult.replace(regex, (match, integer, decimal) => {
          const formattedInteger = integer.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          );
          return decimal ? formattedInteger + decimal : formattedInteger;
        })
      );
    }
  }, [result]);

  return (
    <ResultContext.Provider
      value={{ result, setresult, l, theme, toggleTheme }}
    >
      <Header />
      <div role="main" className="main">
        <Display result={result} />
        <Buttons />
      </div>
    </ResultContext.Provider>
  );
};
