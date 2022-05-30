import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import PrivateHome from "./Private/PrivateHome/PrivateHome";

export default function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="container p-5">
      <h1 className="display-4 text-light">
        {currentUser ? <PrivateHome /> : "Inscrit toi ou connecte toi"}
      </h1>
    </div>
  );
}
