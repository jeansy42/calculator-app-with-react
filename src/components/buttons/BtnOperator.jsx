import { useContext } from "react";
import { ResultContext } from "../../context/ResultContext";
export const BtnOperator = ({ handleClick, operator }) => {
  const { l, result, setresult } = useContext(ResultContext);
  return (
    <>
      <button
        data={operator}
        onClick={(e) => {
          if (operator === "-" || operator === "+") {
            if (result[l] === "/" || result[l] === "x") {
              setresult((prev) => prev.slice(0, -1) + operator);
            } else if (result[l] !== operator) handleClick(e);
          } else if (operator === "/" || operator === "x") {
            if (
              result[l] === "+" ||
              result[l] === "x" ||
              result[l] === "-" ||
              result[l] === "/"
            )
              setresult((prev) => prev.slice(0, -1) + operator);
            else if (result[l] !== operator) handleClick(e);
          }
        }}
      >
        {operator}
      </button>
    </>
  );
};
