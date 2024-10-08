//Barra de navegacion
import { React } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <div>
                <img src="icons/TB-icon.jpg"/>
                <Link to="/">Inicio</Link>
                <Link to="/unidades">Unidades</Link>
                <Link to="/contactanos">Contactanos</Link>
            </div>
        </nav>
    );
}

export default Navbar;