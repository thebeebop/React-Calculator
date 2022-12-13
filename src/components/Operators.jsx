import { useEffect } from "react";
import { useState } from "react";

const Operators = ({
  setOperator,
  setOperatorClicked,
  calculateSum,
  setDisplay,
  setFirstNumber,
  setSecondNumber,
  setSumCalled,
  operatorSwitch,
  setOperatorSwitch,
  firstNumber,
  secondNumber,
}) => {
  // Style values kept in state
  const [plusClicked, setPlusClicked] = useState(false);
  const [minusClicked, setMinusClicked] = useState(false);
  const [multipliClicked, setMultipliClicked] = useState(false);
  const [divisionClicked, setDivisionClicked] = useState(false);

  // When operator is already selected, and a number is pressed, operator should be de-selected.
  useEffect(() => {
    if (!operatorSwitch) {
      setPlusClicked(false);
      setMinusClicked(false);
      setMultipliClicked(false);
      setDivisionClicked(false);
    }
  }, [operatorSwitch]);

  //styles for the button interactions
  const unpressed = {
    backgroundColor: "rgb(160, 160, 160)",
    fontSize: 35,
    border: 0,
    fontWeight: 600,
  };

  const pressed = {
    backgroundColor: "rgb(89, 88, 88)",
    fontSize: 35,
    border: 0,
    fontWeight: 600,
  };

  const handleOperator = (e) => {
    const operator = e.target.value;
    setOperator(operator);
    setOperatorClicked(true);
    setOperatorSwitch(true);
  };

  const handleCancel = (e) => {
    setPlusClicked(false);
    setMinusClicked(false);
    setMultipliClicked(false);
    setDivisionClicked(false);
    setOperator(null);
    setFirstNumber(0);
    setSecondNumber(0);
    setDisplay(0);
    setOperatorClicked(false);
    setSumCalled(false);
  };

  const handleSum = () => {
    calculateSum();
    setPlusClicked(false);
    setMinusClicked(false);
    setMultipliClicked(false);
    setDivisionClicked(false);
    setOperator(null);
    setOperatorClicked(false);
  };

  const handleAutoCalculation = () => {
    if (firstNumber && secondNumber) {
      calculateSum();
    }
  };

  //Change style of button
  const changeStyle = (e) => {
    const operator = e.target.value;
    if ((operator === "+") & (plusClicked === false)) {
      setPlusClicked(true);
      setMinusClicked(false);
      setMultipliClicked(false);
      setDivisionClicked(false);
    } else {
      setPlusClicked(false);
    }

    if ((operator === "-") & (minusClicked === false)) {
      setPlusClicked(false);
      setMinusClicked(true);
      setMultipliClicked(false);
      setDivisionClicked(false);
    } else {
      setMinusClicked(false);
    }

    if ((operator === "x") & (multipliClicked === false)) {
      setPlusClicked(false);
      setMinusClicked(false);
      setMultipliClicked(true);
      setDivisionClicked(false);
    } else {
      setMultipliClicked(false);
    }

    if ((operator === "÷") & (divisionClicked === false)) {
      setPlusClicked(false);
      setMinusClicked(false);
      setMultipliClicked(false);
      setDivisionClicked(true);
    } else {
      setDivisionClicked(false);
    }
  };

  return (
    <>
      <button
        value="+"
        style={plusClicked ? pressed : unpressed}
        onClick={(e) => {
          handleAutoCalculation();
          handleOperator(e);
          changeStyle(e);
        }}
      >
        +
      </button>
      <button
        value="-"
        style={minusClicked ? pressed : unpressed}
        onClick={(e) => {
          handleAutoCalculation();
          handleOperator(e);
          changeStyle(e);
        }}
      >
        -
      </button>
      <button
        value="x"
        style={multipliClicked ? pressed : unpressed}
        onClick={(e) => {
          handleAutoCalculation();
          handleOperator(e);
          changeStyle(e);
        }}
      >
        x
      </button>
      <button
        value="÷"
        style={divisionClicked ? pressed : unpressed}
        onClick={(e) => {
          handleAutoCalculation();
          handleOperator(e);
          changeStyle(e);
        }}
      >
        ÷
      </button>
      <button
        value="="
        className="button operator"
        id="equals"
        onClick={handleSum}
      >
        =
      </button>
      <button className="button operator" onClick={handleCancel} id="cancel">
        C
      </button>
    </>
  );
};

export default Operators;
