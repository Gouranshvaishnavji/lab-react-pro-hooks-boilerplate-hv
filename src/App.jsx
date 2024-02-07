import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './App.css'; // Changed the CSS file name

const LARGE_NUMBER = 1000000000;

function App() { // Changed the component name

  const [value, setValue] = useState(0);
  const [dark, setDark] = useState(true); // Changed variable name
  const [themeName, setThemeName] = useState("dark");
  const [currentList, setList] = useState([]);

  const delayFunction = useMemo(() => {
    console.log("Delay Function Ran");
    for (let index = 0; index < LARGE_NUMBER; index++) {};
    return value + 2;
  }, [value]);

  const testFunction = useCallback(() => {
    return [value * 3, value * 4];
  }, [value]);

  useEffect(() => {
    console.log("Callback Function was called");
  }, [testFunction]);

  useEffect(() => {
    if (dark) {
      setThemeName("To-light");
    } else {
      setThemeName("To-DArk");
    }
  }, [dark]);

  const handleClick = () => {
    setDark(!dark); // Changed function and variable names
  };

  const handleChangeValue = () => {
    setValue(value + 1);
  };

  const handleList = () => {
    setList(testFunction);
  };

  const styleTheme = {
    backgroundColor: dark ? "black" : "#ccc7c7",
  };

  return (
    <div className="custom-page" style={styleTheme}> {/* Changed class name */}
      <button onClick={handleClick}>{themeName}</button>
      <h1>{value}</h1>
      <button onClick={handleChangeValue}>Change Value</button>
      <button onClick={handleList}>Show List</button>
      <h2>{delayFunction}</h2>
      <div>
        {currentList.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
    </div>
  );
}

export default App;
