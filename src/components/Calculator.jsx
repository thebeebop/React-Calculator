import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";
import { useEffect } from "react";

const Calculator = () => {
  const [operator, setOperator] = useState("");
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const [display, setDisplay] = useState("");
  const [operatorClicked, setOperatorClicked] = useState(false);
  const [operatorSwitch, setOperatorSwitch] = useState(false);
  const [sumCalled, setSumCalled] = useState(false);

  useEffect(() => {
    setDisplay(secondNumber);
  }, [secondNumber]);

  useEffect(() => {
    setDisplay(firstNumber);
  }, [firstNumber]);

  const calculateSum = () => {
    if (!firstNumber && !secondNumber) {
      return;
    }

    let sum = 0;
    let firstValue = parseFloat(firstNumber);
    let secondValue = parseFloat(secondNumber);

    if (operator === "+") {
      sum = firstValue + secondValue;
    } else if (operator === "-") {
      sum = firstValue - secondValue;
    } else if (operator === "x") {
      sum = firstValue * secondValue;
    } else if (operator === "÷") {
      sum = firstValue / secondValue;
    }

    let finalSum = Number(sum.toFixed(8));
    setSecondNumber(0);
    setFirstNumber(finalSum);
    setSumCalled(true);
  };

  return (
    <div className="calculator-container">
      <Display
        display={display}
        setDisplay={setDisplay}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
      />
      <Buttons
        setFirstNumber={setFirstNumber}
        setSecondNumber={setSecondNumber}
        setOperator={setOperator}
        setOperatorClicked={setOperatorClicked}
        setDisplay={setDisplay}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        operatorClicked={operatorClicked}
        calculateSum={calculateSum}
        display={display}
        sumCalled={sumCalled}
        setSumCalled={setSumCalled}
        operatorSwitch={operatorSwitch}
        setOperatorSwitch={setOperatorSwitch}
      />
    </div>
  );
};

export default Calculator;
