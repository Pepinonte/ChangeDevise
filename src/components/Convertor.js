import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import "../convertor.css";

function Convertor() {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }
  return (
    <div>
      <div className="heading">
        <h1>Conveteur de devises</h1>
      </div>
      <div className="container">
        <div className="left">
          <h3>Montant</h3>
          <input
            type="text"
            placeholder="Entrer le montant"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="middle">
          <h3>De</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setFrom(e.value);
            }}
            value={from}
            placeholder="From"
          />
        </div>
        <div className="switch">
          <HiSwitchHorizontal
            size="30px"
            onClick={() => {
              flip();
            }}
          />
        </div>
        <div className="right">
          <h3>Vers</h3>
          <Dropdown
            options={options}
            onChange={(e) => {
              setTo(e.value);
            }}
            value={to}
            placeholder="To"
          />
        </div>
      </div>
      <div className="result">
        <button
          onClick={() => {
            convert();
          }}
        >
          Convertir
        </button>
        <h2>Montant convertie:</h2>
        <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
      </div>
    </div>
  );
}

export default Convertor;
