//Inicio
//import { useState } from 'react';
//import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
//Componentes
import Navbar from '../components/misc/Navbar';
import Footer from '../components/misc/Footer';
// Importar el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Opcional: Importar JavaScript si usas componentes que requieren JavaScript (como modales o tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min';
//imagenes
const img0 = 'images/buses/olimpico-ca/webp/0.webp';
const img1 = 'images/buses/olimpico-melon/webp/0.webp';
const img2 = 'images/buses/dorado/webp/0.webp';
const img3 = 'images/buses/paradiso/webp/0.webp';
const img4 = 'images/buses/viaggio/webp/0.webp';

function Home() {
    return (
        <>
            <Navbar />

            <main>
            <section className="cover-section">
                <div className="image-cover">
                    <div 
                        id="carouselExampleAutoplaying" 
                        className="carousel slide" 
                        data-bs-ride="carousel" 
                        data-bs-interval="3000" 
                        data-bs-pause="false"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/bus-draws/olimpico-ca.png" className="d-block w-100" alt="Olimpico CA" />
                            </div>
                            <div className="carousel-item">
                                <img src="images/bus-draws/olimpico-melon.png" className="d-block w-100" alt="Olimpico Melon" />
                            </div>
                            <div className="carousel-item">
                                <img src="images/bus-draws/dorado.png" className="d-block w-100" alt="Dorado" />
                            </div>
                            <div className="carousel-item">
                                <img src="images/bus-draws/paradiso.png" className="d-block w-100" alt="Paradiso" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>


                <div className="content container mt-5">
                    <h2 className="text-center mb-4">Conócenos</h2>
                    <p className="text-center">Porque viajar es vivir, ¡vive hoy!</p>
                    <p className="text-center">Ofrecemos en todas las unidades:</p>
                    <div className="row justify-content-center mt-4">
                        <div className="container-caracts-imgs-buses mb-5">
                            <ul className="list-unstyled">
                                <li>🚍 Traslado por autopista.</li>
                                <li>🥤 Bebidas de cortesía.</li>
                                <li>🛡️ Seguro de viajero.</li>
                                <li>❄️ Aire acondicionado.</li>
                                <li>🚻 W.C.</li>
                                <li>📺 Pantallas.</li>
                            </ul>
                        </div>
                        <h2 className="text-center mb-4">Nuestras Unidades</h2>
                        <div id="carouselExampleIndicators" className="carousel slide carousel-home">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner" style={{width: 'fit-content'}}>
                                <div className="carousel-item active">
                                    <img src={img0} className="imgCarr-home" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 style={{color: 'white', fontWeight: 'bold'}}>Olimpico 053</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img1} className="imgCarr-home" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 style={{color: 'white', fontWeight: 'bold'}}>Olimpico 151</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img2} className="imgCarr-home" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 style={{color: 'white', fontWeight: 'bold'}}>Dorado 1850</h5>
                                    </div>
                                </div>
                                <div className="carousel-item"> 
                                    <img src={img3} className="imgCarr-home" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 style={{color: 'white', fontWeight: 'bold'}}>Paradiso</h5>
                                    </div>
                                </div>
                                <div className="carousel-item"> 
                                    <img src={img4} className="imgCarr-home" alt=""/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5 style={{color: 'white', fontWeight: 'bold'}}>Viaggio</h5>
                                    </div>
                                </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>

                <div className="content container mt-5">
                    <h2 className="text-center mb-4">Ubicación</h2>
                    <p className="text-center">Nos Ubicamos en:</p>
                    <div className="map-container mx-auto shadow">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467.06192876665216!2d-103.38428447797928!3d20.526900509907254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f538e08e60453%3A0x4bc7859913d4a057!2sRenta%20de%20Autobuses%20Becerril!5e0!3m2!1sen!2smx!4v1727581142935!5m2!1sen!2smx"
                            width="100%" height="100%"
                            allowFullScreen={true}
                            title="Mapa de Renta de Autobuses Becerril"
                            loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Home;
