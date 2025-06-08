import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-subtitle">Gestiona tus libros </p>

      <div className="dashboard-cards">
        <Link to="/home" className="dashboard-card">
          <h2>Libros</h2>
          <p>Ver y administrar libros registrados</p>
        </Link>
        <Link to="/" className="dashboard-card">
          <h2> Bienvenida</h2>
          <p>Gestiona las categorías disponibles</p>
        </Link>
        <Link to="/books" className="dashboard-card">
          <h2>Nuevo Libro</h2>
          <p>Registrar un nuevo libro</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
