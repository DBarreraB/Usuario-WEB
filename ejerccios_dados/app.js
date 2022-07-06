import { useState } from "react";
import { dados } from "./Dados";

export default function Dados() {
  const [NDice, setNDice] = useState(null);
  const [roll, setRoll] = useState([]);
  const [SumDice, setSumDice] = useState(null);

  const dRoll = (NDice) => {
    let rolls = [];
    let SumDice = 0;
    for (let i = 0; i < NDice; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      SumDice += rolls[i];
    }
    setRoll(rolls);
    setSumDice(SumDice);
    setNDice(NDice);
  };

  return (
    <>
      <div classname="app">
        <h1>Dice roller </h1>
        <div>
          <div>
            {roll.map((roll, index) => (
              <dados.js roll={roll} key={index} />
            ))}
          </div>
          {[1, 2, 3, 4, 5].map((number) => {
            let text = number === 1 ? "die" : "dice";
            return (
              <button key={number} onClick={() => dRoll(number)}>
                {number}
                {text}
              </button>
            );
          })}
        </div>
        <h2> total: </h2>
        <span> {SumDice} / </span>
        {NDice * 6}
      </div>
    </>
  );
}
