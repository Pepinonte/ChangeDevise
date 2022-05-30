import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

export default function Navbar() {
  const { toggleModals } = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "For some reasons we can't deconnect, please check your internet connexion and retry."
      );
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        Convertiseur
      </Link>

      <div>
        <button
          onClick={() => toggleModals("signUp")}
          className="btn btn-primary"
        >
          S'inscrire
        </button>
        <button
          onClick={() => toggleModals("signIn")}
          className="btn btn-primary ms-2"
        >
          Connecter
        </button>
        <button onClick={logOut} className="btn btn-danger ms-2">
          Déconnecter
        </button>
      </div>
    </nav>
  );
}
