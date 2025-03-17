// Pie de página mejorado con diseño moderno
import { React } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <section className="footer-top">
                <div className="footer-text">
                    <p>Contáctanos y cotiza tu próximo viaje en la unidad de tu agrado.</p>
                </div>
                <div className="footer-social">
                    <h2>Nuestras Redes</h2>
                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <a 
                        href="https://www.facebook.com/profile.php?id=61566475322836&mibextid=ZbWKwL" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link"
                    >
                        <FaFacebook className="social-icon" />
                    </a><br />
                    <a 
                        href="https://www.instagram.com/turisticos_becerros?igsh=MTBuY3N0bjZsdjFpYg==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link"
                    >
                        <FaInstagram className="social-icon" />
                    </a>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <a 
                    href="https://bsitescomp.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="designer-link"
                >
                    ©Copyright 2025 Web Designed and Develop by <strong style={{textDecoration: 'underline'}}>B-Sites</strong>
                </a>
            </section>
        </footer>
    );
}

export default Footer;

/* Estilos CSS */


