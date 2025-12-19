import "./App.css";
import Navbar from "./components/Navbar";
import TextOnPage from "./components/textOnpage";
import Alert from "./components/alerts";
/*import About from "./components/Abouts";*/

import { useState, useEffect } from "react";

function App() {
  console.log(process.env.NODE_ENV);
  const [color, setColor] = useState("white");
  // const [font, setFont] = useState("black");
  const [colorbgalert, setbgAlert] = useState("#FACC15");
  const [expColor, setColBut] = useState("blue");
  const [changeStatus, setStatus] = useState(false);

  // const [panelBg, setPanel] = useState("bg-slate-100");

  const [alert, updAlert] = useState(null);
  const updAlrt = (message, type) => {
    updAlert({ msg: message, type: type });
  };
  function onChg() {
    setStatus((prev) => (prev === true ? false : true));
    console.log("Is reaching on change");

    setColor((prev) => (prev === "white" ? "black" : "white"));
    // setFont((prev) => (prev === "black" ? "white" : "black"));
    setbgAlert((prev) => (prev === "#FACC15" ? "#20B2AA" : "#FACC15"));
    console.log(expColor);

    /* toggling alert message on mode change and this doesnt update until the function ends
and because this is inside the function it counts the previous value of the color
hence we use previous value to check rather than using the value that we are
setting which updates after the function is ended */
    // console.log(color, font);
    if (color === "black") {
      updAlrt("Light Mode enabled", "Mode alert  ");

      // setPanel("bg-slate-100");
    } else if (color === "white") {
      updAlrt("Dark mode enabled", "Mode alert  ");
    }
  }
  useEffect(() => {
    color === "white"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");

    // setPanel("bg-gray-800");
  });

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <div
        className="w-screen h-screen "
        // style={{ background: color, color: font }}
      >
        <Navbar
          title={"Candlewood Assosiation"}
          navObj={"Must know"}
          // color={color}
          onChg={onChg}
          // colorS={color}
          // fontS={font}
          expState={setColBut}
          ButBg={expColor}
          // ringCol={font}
          // bgPanel={panelBg}
        />
        <Alert
          Alert={alert}
          status={changeStatus}
          alertBG={colorbgalert}
          alertTransp={0.55}
          setStatus={setStatus}
        />
        <TextOnPage /*color={color} font={font}*/ colorBut={expColor} />
      </div>
    </div>
  );
}

console.log("This is the use of ES7 extension");
export default App;
