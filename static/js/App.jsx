import React, { useState } from "react";

function App() {
  const [original, setOriginal] = useState("");
  const [diluted, setDiluted] = useState("");
  const [finalVolume, setFinalVolume] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const C1 = parseFloat(original);
    const C2 = parseFloat(diluted);
    const V2 = parseFloat(finalVolume);

    if (C1 > 0 && C2 > 0 && V2 > 0 && C1 > C2) {
      const V1 = ((C2 * V2) / C1).toFixed(2);
      const water = (V2 - V1).toFixed(2);
      setResult({ V1, water });
    } else {
      setResult(null);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>HNO₃ 희석 계산기</h2>
      <div>
        <label>원액 농도 (%)</label>
        <input type="number" value={original} onChange={(e) => setOriginal(e.target.value)} />
      </div>
      <div>
        <label>희석 후 농도 (%)</label>
        <input type="number" value={diluted} onChange={(e) => setDiluted(e.target.value)} />
      </div>
      <div>
        <label>필요한 최종 부피 (mL)</label>
        <input type="number" value={finalVolume} onChange={(e) => setFinalVolume(e.target.value)} />
      </div>
      <button onClick={handleCalculate}>계산하기</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <p>필요한 원액 부피: {result.V1} mL</p>
          <p>증류수 부피: {result.water} mL</p>
        </div>
      )}
    </div>
  );
}

export default App;
