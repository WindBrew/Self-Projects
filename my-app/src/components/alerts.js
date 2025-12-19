import React from "react";
import PropTypes from "prop-types";
export default function Alert(props) {
  const clicked = () => {
    document.getElementById("AlertBar").classList.add("hidden");
  };
  if (props.Alert && props.status) {
    document.getElementById("AlertBar")?.classList.remove("hidden");
    console.log("Reach.AlertProps");
    props.setStatus(false);
  }
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.Alert && (
      <div
        className="p-4 mb-4 text-sm text-fg-warning  rounded-base"
        role="alert"
        id="AlertBar"
        style={{
          backgroundColor: props.alertBG,
        }}
      >
        <span className="font-medium">
          <strong>{capitalize(props.Alert.type)}</strong>
        </span>

        {props.Alert.msg}
        <button
          className="border-none outline-none float-right"
          id="cancelALert"
          onClick={clicked}
        >
          <strong>X</strong>
        </button>
      </div>
    )
  );
}
Alert.propTypes = {
  Alert: PropTypes.object,
};
