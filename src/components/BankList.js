import React, { useState } from "react";
import "../BankList.css";
import axios from "axios";

const BankList = () => {
  const [depData, setDepData] = useState([]);
  const [depNum, setDepNum] = useState("");

  const getList = () => {
    axios
      .get(
        `https://etablissements-publics.api.gouv.fr/v3/departements/${depNum}/banque_de_france`
      )
      .then((response) => {
        const data = response.data.features[0].properties.zonage.communes;
        setDepData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        onChange={(event) => setDepNum(event.target.value)}
        placeholder="numero de departement"
      />
      <button onClick={getList}>Banques</button>
      {/* <p>{depData}</p> */}
      <ul>
        {depData.map((commune) => (
          <li className="bl">{commune}</li>
        ))}
      </ul>
    </div>
  );
};

export default BankList;
