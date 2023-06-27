import { useContext } from "react";
import { ResultContext } from "../../context/ResultContext";

export const BtnPoint = ({ handleClick, pressEqual }) => {
  const { l, result, setresult } = useContext(ResultContext);
  return (
    <>
      <button
        data="."
        onClick={(e) => {
          let matches = result.match(/\d+(\.\d+)?/g);
          let verify = /\./.test(matches[matches.length - 1]);
          if (!verify && result[l] !== ".") {
            handleClick(e);
            if (result == "0" || pressEqual) setresult("0.");
          }
        }}
      >
        .
      </button>
    </>
  );
};
