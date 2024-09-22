import React, { useState, useEffect } from "react";
import "./App.css";
import { bubbleSort, selectionSort, mergeSort } from "./sortingAlgorithms";

const App = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [speed, setSpeed] = useState(50); // Speed state (Lower is faster)

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArr = Array.from({ length: 50 }, () => Math.floor(Math.random() * 500) + 10);
    setArray(newArr);
  };

  const visualizeSorting = async (algorithm) => {
    setSorting(true);
    const sortedArray = await algorithm(array, setArray, speed);
    setArray(sortedArray);
    setSorting(false);
  };

  const handleSpeedChange = (e) => {
    setSpeed(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Sorting Visualizer</h1>
      <div className="array-container">
  {array.map((value, idx) => (
    <div key={idx} className="array-bar" style={{ height: `${value}px` }}>
      <span className="array-value">{value}</span> {/* Display the value */}
    </div>
  ))}
</div>
      <div className="buttons">
        <button onClick={generateArray} disabled={sorting}>
          Generate New Array
        </button>
        <button onClick={() => visualizeSorting(bubbleSort)} disabled={sorting}>
          Bubble Sort
        </button>
        <button onClick={() => visualizeSorting(selectionSort)} disabled={sorting}>
          Selection Sort
        </button>
        <button onClick={() => visualizeSorting(mergeSort)} disabled={sorting}>
          Merge Sort
        </button>
      </div>

      <div className="speed-control">
        <label>Speed: </label>
        <input
          type="range"
          min="10"
          max="200"
          value={speed}
          onChange={handleSpeedChange}
          disabled={sorting}
        />
        <span>{speed}ms</span>
      </div>
    </div>
    
  );
};

export default App;
