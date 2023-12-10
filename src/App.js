import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State to store the calculator expression
  const [expression, setExpression] = useState('');

  // Function to handle button clicks and update the expression
  const handleBtnClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  }

  // Function to handle the "AC" button click and clear the expression
  const handleAcBtnClick = () => {
    setExpression('');
  }

  // Function to handle the "⬅" button click and remove the last character from the expression
  const handleBackspace = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  }

  // Function to handle the "=" button click, evaluate the expression, and update the result
  const handleEval = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  }

  return (
    <>
      {/* Calculator UI */}
      <div id="main">
        <h1>Calculator</h1>
        <div className='calc'>
          {/* Input field to display the expression */}
          <input type="text" name="value" id="value" value={expression} readOnly />
          {/* Calculator buttons */}
          <div className="btns">
            <div>
              {/* Clear button */}
              <button onClick={() => handleAcBtnClick()}>AC</button>
              {/* Backspace button */}
              <button onClick={() => handleBackspace()}>⬅</button>
              {/* Evaluate button */}
              <button onClick={() => handleEval()}>=</button>
              {/* Division button */}
              <button onClick={() => handleBtnClick('/')}>/</button>
            </div>
            <div>
              {/* Number buttons */}
              <button onClick={() => handleBtnClick('7')}>7</button>
              <button onClick={() => handleBtnClick('8')}>8</button>
              <button onClick={() => handleBtnClick('9')}>9</button>
              {/* Addition button */}
              <button onClick={() => handleBtnClick('+')}>+</button>
            </div>
            <div>
              {/* Number buttons */}
              <button onClick={() => handleBtnClick('6')}>6</button>
              <button onClick={() => handleBtnClick('5')}>5</button>
              <button onClick={() => handleBtnClick('4')}>4</button>
              {/* Subtraction button */}
              <button onClick={() => handleBtnClick('-')}>-</button>
            </div>
            <div>
              {/* Number buttons */}
              <button onClick={() => handleBtnClick('3')}>3</button>
              <button onClick={() => handleBtnClick('2')}>2</button>
              <button onClick={() => handleBtnClick('1')}>1</button>
              {/* Multiplication button */}
              <button onClick={() => handleBtnClick('*')}>*</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;