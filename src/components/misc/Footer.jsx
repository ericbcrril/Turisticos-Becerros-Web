//Pie de pagina
import { React } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return(
        <footer>
            <section className="s0">
                <div className="footer-txt">
                        <p>Contáctanos y cotiza tu próximo viaje en la unidad de tu agrado.</p>
                </div>
                <div>
                    <h2>Nuestras Redes</h2>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebook} className="social-icons"/>
                                {"  www.facebook/Turísticos-Becerros"}
                            </a><br/>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} className="social-icons"/>
                                {"  www.instagram/Turísticos-Becerros"}
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