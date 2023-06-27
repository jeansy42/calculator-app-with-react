import { useContext } from "react";
import { ResultContext } from "../../context/ResultContext";
export const BtnNum = ({ handleClick, num }) => {
  const { result } = useContext(ResultContext);
  return (
    <>
      <button
        data={num}
        onClick={(e) => {
          if (num === "0") {
            let verify = /(?:\+0|-0|\/0|\x0)$/.test(result);
            if (!verify) handleClick(e);
          } else handleClick(e);
        }}
      >
        {num}
      </button>
    </>
  );
};
