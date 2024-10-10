import React, { useState } from "react";

function RandomNumberGenerator() {
  const [firstnum, First] = useState("");
  const [endnum, End] = useState("");
  const [count, Count] = useState("");
  const [randnum, Random] = useState([]);

  const generate = () => {
    const first = parseInt(firstnum);
    const end = parseInt(endnum);
    const amount = parseInt(count);

    if (first >= end || amount <= 0) {
      alert("Invalid input");
      return;
    }
    const numbers = [];
    for (let i = 0; i < amount; i++) {
      const randomNumber =
        Math.floor(Math.random() * (end - first + 1)) + first;
      numbers.push(randomNumber);
    }

    Random(numbers);
  };

  return (
    <div>
      <div>
        <label>
          First number:
          <input
            type="number"
            value={firstnum}
            onChange={() => First(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Last number:
          <input
            type="number"
            value={endnum}
            onChange={(e) => End(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Amount of numbers:
          <input
            type="number"
            value={count}
            onChange={(e) => Count(e.target.value)}
          />
        </label>
      </div>
      <button onClick={generate}>Generate</button>

      {randnum.length > 0 && (
        <div>
          <h2>Random nums:</h2>
          <ul>
            {randnum.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RandomNumberGenerator;
