import React, { useState } from "react";

function CoinFlip() {
  const [choice, Choice] = useState("");
  const [result, Result] = useState("");
  const [message, Message] = useState("");

  const flipCoin = () => {
    const sides = ["Орел", "Решка"];
    const ranside = sides[Math.floor(Math.random() * 2)];
    Result(ranside);

    if (choice === ranside) {
      Message("Ви виграли!");
    } else {
      Message("Ви програли");
    }
  };

  return (
    <div>
      <div>
        <label>
          Вибери сторону:
          <select value={choice} onChange={(e) => Choice(e.target.value)}>
            <option value="">Вибір</option>
            <option value="Орел">Орел</option>
            <option value="Решка">Решка</option>
          </select>
        </label>
      </div>
      <button onClick={flipCoin} disabled={!choice}>
        Кинути монетку
      </button>

      {result && (
        <div>
          <h2>Результат: {result}</h2>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
}

export default CoinFlip;
