// import { useState } from "react";
import { useState } from "react";
import { calculatorInputs } from "./calculator-inputs";
import { Button } from "./components/button";
import "./index.css";

export function App() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    setDisplay((prev) => (prev === "0" ? value : prev + value));
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  };

  return (
    <div className="bg-gray-700 flex justify-center items-center h-screen">
      <div className="bg-zinc-900 text-white font-sans p-2 rounded-lg">
        <input
          className="bg-zinc-900 text-right w-full"
          type="text"
          value={display}
          disabled
        />
        <div className="grid grid-cols-4 p-2 g-3">
          <Button id="C" label="C" onClick={() => setDisplay("0")} />
          <Button id="+" label="+" onClick={() => handleClick("+")} />
          <Button id="-" label="-" onClick={() => handleClick("-")} />
          <Button id="/" label="/" onClick={() => handleClick("/")} />
          <Button id="*" label="*" onClick={() => handleClick("*")} />
          <Button id="=" label="=" onClick={() => handleEqual()} />
          {calculatorInputs.map((input) => (
            <Button
              key={input.id}
              id={input.id}
              label={input.label}
              onClick={() => handleClick(input.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
