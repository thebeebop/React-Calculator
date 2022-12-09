const Numbers = ({
  setFirstNumber,
  setSecondNumber,
  display,
  operatorClicked,
  secondNumber,
  operatorSwitch,
  setOperatorSwitch,
}) => {
  const handleFirstNumber = (e) => {
    const number = e.target.innerHTML;
    if (!operatorClicked) {
      if (display === 0) {
        setFirstNumber(number);
      } else {
        setFirstNumber((currNumber) => (currNumber += number));
      }
    }
  };

  const handleSecondNumber = (e) => {
    const number = e.target.innerHTML;
    if (operatorClicked) {
      if (secondNumber === 0) {
        setSecondNumber(number);
      } else {
        setSecondNumber((currNumber) => (currNumber += number));
      }
    }
  };

  const handleDecimal = (e) => {
    if (!display.includes(".")) {
      handleFirstNumber(e);
      handleSecondNumber(e);
    }
  };

  const handleUnClickOperator = () => {
    if (operatorSwitch) {
      setOperatorSwitch(false);
    }
  };

  return (
    <>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        7
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        8
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        9
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        4
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        5
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        6
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        1
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        2
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        3
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleFirstNumber(e);
          handleSecondNumber(e);
          handleUnClickOperator();
        }}
      >
        0
      </button>
      <button
        className="button number"
        onClick={(e) => {
          handleDecimal(e);
          handleUnClickOperator();
        }}
        id="point"
      >
        .
      </button>
    </>
  );
};

export default Numbers;
