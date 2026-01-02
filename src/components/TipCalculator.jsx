import { useState } from "react";
import BillInput from "./BillInput.jsx";
import SelectPercentage from "./SelectPercentage.jsx";
import Output from "./Output.jsx";
import Reset from "./Reset.jsx";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tipPercentageA, setTipPercentageA] = useState(0);
  const [tipPercentageB, setTipPercentageB] = useState(0);

  const tip = bill * ((tipPercentageA + tipPercentageB) / 2 / 100);

  function handleReset() {
    setBill("");
    setTipPercentageA(0);
    setTipPercentageB(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage
        tipPercentage={tipPercentageA}
        setTipPercentage={setTipPercentageA}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        tipPercentage={tipPercentageB}
        setTipPercentage={setTipPercentageB}
      >
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && <Output bill={bill} tip={tip} />}
      {bill > 0 && <Reset onReset={handleReset} />}
    </div>
  );
}

export default TipCalculator;