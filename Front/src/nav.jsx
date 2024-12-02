//Estilos
import "./proyec.css";
//Logo
import logo from "./assets/logoPersumes.jpg";
//Paginas
import { Inicio } from "./Paginas/Inicio";
import { Mujeres } from "./Paginas/Mujeres";
import { Hombres } from "./Paginas/Hombres";
import { Unisex } from "./Paginas/Unisex";
import { Admin } from "./Paginas/Admin";
//Router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export function Nav() {
  return (
    <Router>
      <nav>
        <img src={logo} alt="Logo" />
        <Link to="/">
          <ul>INICIO</ul>
        </Link>
        <Link to="/Mujeres">
          <ul>MUJERES</ul>
        </Link>
        <Link to="/Hombres">
          <ul>HOMBRES</ul>
        </Link>
        <Link to="/Unisex">
          <ul>UNISEX</ul>
        </Link>
        <Link to="/Admin">
          <ul>ADMIN</ul>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Mujeres" element={<Mujeres />} />
        <Route path="/Hombres" element={<Hombres />} />
        <Route path="/Unisex" element={<Unisex />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
