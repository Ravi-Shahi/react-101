import "./App.css";
import Box from "./Box";
import Input from "./Input";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  const inputRef = useRef(null);

  const handleRef = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <Box
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        inputRef={inputRef}
        handleRef={handleRef}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
