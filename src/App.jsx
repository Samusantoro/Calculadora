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
  }
  const toggleSign = () => {
    setDisplay(prevValue => {
      if (prevValue === "0") {
        return prevValue;
      } else if (prevValue.charAt(0) === "-") {
        return prevValue.slice(1);
      } else {
        return "-" + prevValue;
      }
    });


  };


{
  };

  return (
    <div className="bg-gray-700 flex justify-center items-center h-screen">
      <div className="bg-zinc-900 text-white font-sans p-2 rounded-lg"> Calculadora
        <input
          className="bg-zinc-900 text-right w-full text-lg px-3"
          type="text"
          value={display}
          disabled
        />

        

        <div className="grid grid-cols-4 p-2 g-3">
      
        <Button id="+/-" label="+/-"  onClick={() => toggleSign("")} />
        <Button id="%" label="%"  onClick={() => handleClick("")} />
        <Button id="C" label="C"  onClick={() => setDisplay("0")} />
        
        {calculatorInputs.map((input) => (
            <Button
              key={input.id}
              id={input.id}
              label={input.label}
              cor={input.cor}
              tamanho={input.tamanho}
              onClick={() => handleClick(input.id)}
            />
          ))}
        <Button id="=" label="=" cor="orange" onClick={() => handleEqual()}/>
          </div>

        

      </div>
    </div>
  );
}
