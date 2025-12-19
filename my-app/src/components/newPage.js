import React from "react";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return <h1>{title}</h1>;
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default function App() {
  return <Navbar title={12345} />; // This should give a warning
}
