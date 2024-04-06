import React, { useState } from "react";
import "./main.css";
function Main() {
  const [result, setresult] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = (e) => {
    console.log(typeof e.target.name);
    setresult(result+(e.target.name));
    console.log(typeof result);
  };

  const darkHandle = () => {
    setDarkMode(!darkMode);
  };

  const clear = () => {
    setresult("");
  };
  const calculate = () => {
    try {
      setresult(eval(result).toString());
    } catch (error) {
      setresult("Error");
    }
  };
  const lastRemove = () => {
    setresult(result.slice(0, -1));
  };
  const handleSceintificClick = (e) => {
    const num=e.target.name;
    try {
      switch (num) {
        case "sin":
          setresult(Math.sin(eval(result)));
          break;
        case "cos":
          setresult(Math.cos(eval(result)));
          break;
        case "tan":
          setresult(Math.tan(eval(result)));
          break;
        case "sqrt":
          setresult(Math.sqrt(eval(result)));
          break;
        case "log":
          setresult(Math.log(eval(result)));
          break;
        default:
          setresult("Error");
          break;
      }
    } catch (error) {
      setresult("Error");
    }
  };

  return (
    <>
      <div className={darkMode ? "dark-mode" : ""}>
        <div className="main">
          <button
            type="button"
            className={
              darkMode
                ? "btn btn-dark border border-light rounded-pill"
                : " btn btn btn-light border border-dark rounded-pill"
            }
            style={{ marginLeft: "-234px" }}
            onClick={darkHandle}
          >
            <i className="fa-regular fa-moon fa-xl "></i>
          </button>

          <div className="display mb-2">
            <h3 className="text-end">{result}</h3>
          </div>
          <div className="buttons">
            <button id="clear" onClick={clear}>
              AC
            </button>
            <button id="clear" onClick={lastRemove}>
              C
            </button>
            <button
             id="clear"
              name="/"
              onClick={handleClick}
            >
              /
            </button>
            <button
            id="clear"
              name="*"
              onClick={handleClick}
            >
              *
            </button>
            <button
            id="clear"
              name="sqrt"
              onClick={handleSceintificClick}
            >
              sqrt
            </button>
          </div>
          <div className="buttons">
            <button id="Normal_btn" name="7" onClick={handleClick}>
              7
            </button>
            <button id="Normal_btn" name="8" onClick={handleClick}>
              8
            </button>
            <button id="Normal_btn" name="9" onClick={handleClick}>
              9
            </button>
            <button
             id="clear"
              name="-"
              onClick={handleClick}
            >
              -
            </button>
            <button
              id="clear"
              name="tan"
              onClick={handleSceintificClick}
            >
              tan
            </button>
          </div>
          <div className="buttons">
            <button id="Normal_btn" name="4" onClick={handleClick}>
              4
            </button>
            <button id="Normal_btn" name="5" onClick={handleClick}>
              5
            </button>
            <button id="Normal_btn" name="6" onClick={handleClick}>
              6
            </button>
            <button
            id="clear"
              name="+"
              onClick={handleClick}
            >
              +
            </button>
            <button
             id="clear"
              name="cos"
              onClick={handleSceintificClick}
            >
              cos
            </button>
          </div>
          <div className="buttons">
            <button id="Normal_btn" name="1" onClick={handleClick}>
              1
            </button>
            <button id="Normal_btn" name="2" onClick={handleClick}>
              2
            </button>
            <button id="Normal_btn" name="3" onClick={handleClick}>
              3
            </button>
            <button
             id="clear"
              name="."
              onClick={handleClick}
            >
              .
            </button>
            <button
              id="clear"
              name="sin"
              onClick={handleSceintificClick}
            >
              sin
            </button>
          </div>
          <div className="buttons">
            <button id="Normal_btn" name="0" onClick={handleClick}>
              0
            </button>
            <button id="Normal_btn" name="00" onClick={handleClick}>
              00
            </button>
            <button
              id="clear"
              
              name="log"
              onClick={handleSceintificClick}
            >
              log
            </button>
            <button id="equalTo" onClick={calculate}>
              =
            </button>
          </div>
        </div>
        <script src="script.js"></script>
      </div>
    </>
  );
}

export default Main;
