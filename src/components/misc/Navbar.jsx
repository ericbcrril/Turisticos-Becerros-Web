import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation(); // Hook para obtener la ruta actual

    // Función para verificar si el enlace debe estar activo
    const isActive = (path) => location.pathname === path ? "active-link" : "";

    return (
        <nav>
            <div>
                <img src="icons/TB-icon.jpg" alt="navbar" />
                <Link to="/" className={isActive("/")}>Inicio</Link>
                <Link to="/unidades" className={isActive("/unidades")}>Unidades</Link>
                <Link to="/contactanos" className={isActive("/contactanos")}>Contactanos</Link>
            </div>
        </nav>
    );
}

export default Navbar;
