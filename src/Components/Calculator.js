import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result + e.target.name);
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div>

<br/>
<h1 id="one"> calculator app </h1>
  
    <div className="calculator mx-auto max-w-sm p-4 bg-gray-100 rounded">
     
      <input
        className="w-full mb-4 p-2 rounded"
        type="text"
        value={result}
        readOnly
        text-white
      />

      <div className="keypad grid grid-cols-4 gap-2">
        <button
          className="operator bg-blue-500 text-white"
          name="+"
          onClick={handleClick}
        >
          +
        </button>
        <button
          className="operator bg-blue-500 text-white"
          name="-"
          onClick={handleClick}
        >
          -
        </button>
        <button
          className="operator bg-blue-500 text-white"
          name="*"
          onClick={handleClick}
        >
          *
        </button>
        <button
          className="operator bg-blue-500 text-white"
          name="/"
          onClick={handleClick}
        >
          /
        </button>

        <button
          className="bg-gray-200"
          name="7"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="bg-gray-200"
          name="8"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="bg-gray-200"
          name="9"
          onClick={handleClick}
        >
          9
        </button>

        <button
          className="bg-gray-200"
          name="4"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="bg-gray-200"
          name="5"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="bg-gray-200"
          name="6"
          onClick={handleClick}
        >
          6
        </button>

        <button
          className="bg-gray-200"
          name="1"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="bg-gray-200"
          name="2"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="bg-gray-200"
          name="3"
          onClick={handleClick}
        >
          3
        </button>

        <button
          className="bg-gray-200"
          name="0"
          onClick={handleClick}
        >
          0
        </button>
        <button
          className="bg-gray-200"
          name="."
          onClick={handleClick}
        >
          .
        </button>
        <button
          className="clear bg-red-500 text-white"
          onClick={clear}
        >
          Clear
        </button>
        <button
          className="equal bg-green-500 text-white"
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>\  </div>
  );
};

export default Calculator;
