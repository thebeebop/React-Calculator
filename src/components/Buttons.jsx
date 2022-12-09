import Operators from "./Operators";
import Numbers from "./Numbers";

const Buttons = ({
  setOperator,
  operatorClicked,
  setOperatorClicked,
  setFirstNumber,
  setSecondNumber,
  calculateSum,
  setDisplay,
  display,
  firstNumber,
  secondNumber,
  sumCalled,
  setSumCalled,
  operatorSwitch,
  setOperatorSwitch,
}) => {
  return (
    <div className="buttons-container">
      <Operators
        setOperator={setOperator}
        operatorClicked={operatorClicked}
        setOperatorClicked={setOperatorClicked}
        setFirstNumber={setFirstNumber}
        setSecondNumber={setSecondNumber}
        calculateSum={calculateSum}
        setDisplay={setDisplay}
        sumCalled={sumCalled}
        setSumCalled={setSumCalled}
        setOperatorSwitch={setOperatorSwitch}
        operatorSwitch={operatorSwitch}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
      />
      <Numbers
        setFirstNumber={setFirstNumber}
        setSecondNumber={setSecondNumber}
        display={display}
        operatorClicked={operatorClicked}
        setOperatorClicked={setOperatorClicked}
        secondNumber={secondNumber}
        operatorSwitch={operatorSwitch}
        setOperatorSwitch={setOperatorSwitch}
      />
    </div>
  );
};

export default Buttons;
