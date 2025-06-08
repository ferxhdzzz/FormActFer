import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SubTitulo from "../components/SubTitulo";
import "./Welcome.css"; // Asegúrate de importar el CSS

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/dash");
  };

  if (!showWelcome) return null;

  return (
    <div className="cont">
      <div className="contt">
       <SubTitulo titulo="Bienvenido a la Aplicación CRUD" className="titulo-negro" />

        <p className="pe">
          ¡Gracias por visitar nuestra aplicación CRUD!
        </p>

        <Button
          type="button"
          onClick={handleAccept}
          text="Aceptar"
          className="button"
        />
      </div>
    </div>
  );
};

export default Welcome;
