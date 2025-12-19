import PropTypes from "prop-types";
import { useState } from "react";

function TextOnPage(props) {
  const ResetClk = () => {
    if (text.toLowerCase() === "enter text here") {
      setText("");
    }
  };
  const [text, setText] = useState("Enter text here");
  const handleChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
    ResetClk();
  };
  const handleUppcs = () => {
    setText(text.toUpperCase());
  };
  const handleLows = () => {
    setText(text.toLowerCase());
  };
  /* use useState because variables do not update in re rendering and react resets to default with re render
  and useState stays */
  const resetIt = () => {
    setText("");
  };

  return (
    <div className="w-[55%]">
      <h1 id="MyText">every breath {props.NounPronoun} take</h1>
      <textarea
        id="WriteHere"
        placeholder="Text here"
        className="shadow-md dark:shadow-lg dark:shadow-slate-900 w-full h-28 m-12 border-4 border-solid border-gray-300 ml-0 dark:bg-black dark:text-white"
        value={text}
        onChange={handleChange}
        onClick={ResetClk}
        // style={{ background: props.color, color: props.font }}
      ></textarea>
      <button
        className="ml-2 text-white  box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
        id="ConvUp"
        style={{ background: props.colorBut }}
        onClick={handleUppcs}
      >
        UPPERCASE
      </button>
      <button
        className="ml-2 text-white box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
        id="ConvLo"
        onClick={handleLows}
        style={{ background: props.colorBut }}
      >
        lowercase
      </button>
      <button
        onClick={resetIt}
        style={{ background: props.colorBut }}
        className="float-right text-white box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
      >
        clear
      </button>
      <div className="previewContainer mt-12">
        <h4>
          {text.split(" ").length} words and {text.length} characters
        </h4>
        <h4>{(0.008 * text.split(" ").length).toFixed(2)} minutes read</h4>
        <h2>
          <strong>Preview</strong>
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
TextOnPage.propTypes = {
  NounPronoun: PropTypes.string,
};
TextOnPage.defaultProps = {
  NounPronoun: "You",
  colorBut: "blue",
};

export default TextOnPage;
