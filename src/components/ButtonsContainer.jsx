import { useContext, useState } from "react";
import { ResultContext } from "../context/ResultContext";
import { BtnOperator } from "./buttons/BtnOperator";
import { BtnPoint } from "./buttons/BtnPoint";
import { BtnNum } from "./buttons/BtnNum";

export const Buttons = () => {
  const { setresult, result, theme } = useContext(ResultContext);
  const [pressEqual, setPressEqual] = useState(false);

  

  const handleClick = (e) => {
    var data = e.target.getAttribute("data");
    if (
      result == "0" &&
      data !== "+" &&
      data !== "/" &&
      data !== "x" &&
      data !== "-"
    )
      setresult(data);
    else if (
      pressEqual &&
      data !== "+" &&
      data !== "/" &&
      data !== "x" &&
      data !== "-"
    )
      setresult(data);
    else setresult((prev) => prev + data);
    setPressEqual(false);
  };
  const handleReset = () => {
    setresult("0");
    setPressEqual(false);
  };
  const handleEqual = () => {
    let okresult = result;
    if (/(?:\+|\x|\/|-)$/.test(result)) {
      okresult = result + result.slice(0, -1);
    }
    okresult = eval(
      okresult.replace(/[x,]/g, (match) => {
        if (match === "x") return "*";
        else if (match === ",") return "";
      })
    );
    okresult = okresult.toPrecision();
    /*   if (!okresult.includes("e")) {
      okresult = okresult.replace(/(?<=(?<!\.\d*)\d)(?=(\d{3})+(\.|$))/g, ",");
      setresult(okresult);
    } else */ setresult(okresult);
    setPressEqual(true);
  };
  const handleDel = () => {
    if (!pressEqual) setresult(result.slice(0, -1));
    if (result.length === 1) setresult("0");
  };

  return (
    <div className={`buttons-container ${theme}`}>
      <BtnNum handleClick={handleClick} num="7" />
      <BtnNum handleClick={handleClick} num="8" />
      <BtnNum handleClick={handleClick} num="9" />
      <BtnNum handleClick={handleDel} num={"DEL"} />

      <BtnNum handleClick={handleClick} num="4" />
      <BtnNum handleClick={handleClick} num="5" />
      <BtnNum handleClick={handleClick} num="6" />
      <BtnOperator handleClick={handleClick} operator="+" />

      <BtnNum handleClick={handleClick} num="1" />
      <BtnNum handleClick={handleClick} num="2" />
      <BtnNum handleClick={handleClick} num="3" />
      <BtnOperator handleClick={handleClick} operator="-" />

      <BtnPoint handleClick={handleClick} pressEqual={pressEqual} />
      <BtnNum handleClick={handleClick} num="0" />
      <BtnOperator handleClick={handleClick} operator="/" />
      <BtnOperator handleClick={handleClick} operator="x" />
      <BtnNum handleClick={handleReset} num="RESET" />
      <BtnNum handleClick={handleEqual} num="=" />
    </div>
  );
};
