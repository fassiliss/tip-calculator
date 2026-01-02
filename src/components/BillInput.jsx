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
export default BillInput;