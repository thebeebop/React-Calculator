import { useEffect, useState } from "react";

const Display = ({ display, firstNumber, secondNumber }) => {
  const normalFontSize = {
    fontSize: 60,
    fontWeight: 400,
    color: "white",
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
    overflowWrap: "anywhere",
  };

  const decreaseFontSize = {
    fontSize: 40,
    fontWeight: 400,
    color: "white",
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
    overflowWrap: "anywhere",
  };

  const [fontSize, setFontSize] = useState(normalFontSize);

  useEffect(() => {
    const firstNumStr = firstNumber.toString();
    const secondNumStr = secondNumber.toString();
    if (firstNumStr.length >= 11 || secondNumStr.length >= 11) {
      setFontSize(decreaseFontSize);
    } else {
      setFontSize(normalFontSize);
    }
  }, [firstNumber, secondNumber]);

  return (
    <div className="display-container">
      <p style={fontSize} align="right">
        {display}
      </p>
    </div>
  );
};

export default Display;
