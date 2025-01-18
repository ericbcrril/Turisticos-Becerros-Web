//Pie de pagina
import { React } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";


function Footer() {
    return(
        <footer>
            <section className="s0">
                <div className="footer-txt">
                        <p>Contáctanos y cotiza tu próximo viaje en la unidad de tu agrado.</p>
                </div>
                <div>
                    <h2>Nuestras Redes</h2>
                            <a href="https://www.facebook.com/profile.php?id=61566475322836&mibextid=ZbWKwL">
                                <FaFacebook className="social-icons"/>
                                {"  www.facebook/Turísticos Becerros"}
                            </a><br/>
                            <a href="https://www.instagram.com/turisticos_becerros?igsh=MTBuY3N0bjZsdjFpYg==">
                                <FaInstagram className="social-icons"/>
                                {"  www.instagram/turisticos_becerros"}
                            </a>
                </div>
            </section>
            <section className="s1">
                <a href="https://www.linkedin.com/in/ericbcrril061021/">Designed By Eric Becerril</a>
            </section>
        </footer>
    );
}

export default Footer;