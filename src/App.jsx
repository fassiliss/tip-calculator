import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

export default App;

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

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill</label>
      <input
        type="text"
        placeholder="bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, tipPercentage, setTipPercentage }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={tipPercentage}
        onChange={(e) => setTipPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%) </option>
        <option value="5">It was okay (5%) </option>
        <option value="10">It was good (10%) </option>
        <option value="20">Absolutlely (20%) </option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h2>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
