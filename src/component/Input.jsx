import React, { useState } from 'react';
import Output from './Output';
import '../CSS/style.css';

const Input = () => {
  const [word, setWord] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="hlw">
        <input
          type={showPassword ? "text" : "password"}
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter Word"
        />
        {showPassword ? (
          <i className="fa-solid fa-eye-slash" onClick={togglePasswordVisibility}></i>
        ) : (
          <i className="fa-solid fa-eye" onClick={togglePasswordVisibility}></i>
        )}
      </div>
      <Output val={word.length} />
    </>
  );
};

export default Input;
