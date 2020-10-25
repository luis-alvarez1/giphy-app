import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddElement = ({ setArr }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setArr((prevState) => [...prevState, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          placeholder="Example"
        />
      </form>
    </>
  );
};

AddElement.propTypes = {
  setArr: PropTypes.func.isRequired,
};
