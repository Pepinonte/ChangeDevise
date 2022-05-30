import React from "react";
import BankList from "../../../components/BankList";
import Convertor from "../../../components/Convertor";
import cat from "./3ai.gif";

export default function PrivateHome() {
  return (
    <div className="container p-5">
      <h1 className="display-15 text-light mb-4">
        Super page privé rien que a vous
      </h1>
      <img src={cat} />
      <Convertor />

      <div>
        <BankList />
      </div>
    </div>
  );
}
