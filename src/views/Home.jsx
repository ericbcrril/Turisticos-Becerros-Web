//Inicio
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
//Componentes
import Navbar from '../components/misc/Navbar';
import Footer from '../components/misc/Footer';
// Importar el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Opcional: Importar JavaScript si usas componentes que requieren JavaScript (como modales o tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
          question: '¿Qué ocurre cuando falla alguna unidad?',
          answer: 'Las unidades de este grupo están constantemente en revisión y mantenimiento preventivo para así evitar alguna falla durante el transcurso del viaje. Aun así, no están exentas de sufrir alguna descompostura; en estos casos, contamos con unidades de reemplazo para que continúes disfrutando del viaje.',
        },
        {
          question: '¿Esto es una agencia de viajes?',
          answer: 'No, nuestros precios son por unidad y viaje redondo. Este servicio se brinda a organizadores(as) de viajes. El servicio que ofrecemos es exclusivamente de transporte.',
        },
        {
          question: '¿Qué tipo de experiencia tienen los choferes?',
          answer: 'Los operadores de cada unidad están capacitados para cualquier tipo de situación; todos cuentan con licencia federal y de turismo.',
        },
      ];
      

    return(
        <>
            <Navbar/>

            <main>

                <section className="cover-section">
                    <div className="image-cover">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/bus-draws/olimpico-ca.png" className="d-block w-100" alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/bus-draws/olimpico-melon.png" className="d-block w-100" alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img src="images/bus-draws/dorado.png" className="d-block w-100" alt=""/>
                                </div>
                                <div className="carousel-item"> 
                                    <img src="images/bus-draws/paradiso.png" className="d-block w-100" alt=""/>
                                </div>
                            </div>
                            
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                                <span className="visually-hidden">Next</span>
                            </button>
                            
                        </div>
                    </div>
                </section>

                <div className="content">
                    <h2>Conócenos</h2>
                    <p>El mejor servicio al mejor costo. Viaja de forma 
                        segura y cómoda en nuestras diferentes unidades
                        equipadas con distintas amplias plazas.
                    </p>
                    <p>Ofrecemos en todas las unidades:</p>
                    <p>- Traslado por autopista.</p>
                    <p>- Bebidas de cortesia.</p>
                    <p>- Seguro de viajero.</p>
                    <p>- Aire acondicionado.</p>
                    <p>- W.C</p>
                    <p>- Pantallas de entretenimiento.</p>
                </div>

                <div className="content">
                    <h2>Ubicación</h2>
                    <p>Nos Ubicamos en:</p>
                    <div class="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.06192876665216!2d-103.38428447797928!3d20.526900509907254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f538e08e60453%3A0x4bc7859913d4a057!2sRenta%20de%20Autobuses%20Becerril!5e0!3m2!1sen!2smx!4v1727581142935!5m2!1sen!2smx" 
                        width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="content">
                <h2>Preguntas Frecuentes</h2>
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <span>{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                        </div>
                        {openIndex === index && (
                            <div className="faq-answer">
                            <p>{faq.answer}</p>
                            </div>
                        )}
                        </div>
                    ))}
                </div>

            </main>

            <Footer/>
        </>
    );
}

export default Home;
