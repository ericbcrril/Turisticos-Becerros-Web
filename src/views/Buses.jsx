//Unidades
import { useState, useEffect } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
//Componentes
import Navbar from '../components/misc/Navbar';
import Footer from '../components/misc/Footer';
// Importar el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Opcional: Importar JavaScript si usas componentes que requieren JavaScript (como modales o tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Imagenes de los buses
//Oilimpico CA
const img0OlimpicoCa = require('./images/buses/olimpico-ca/0.jpg');
const img1OlimpicoCa = require('./images/buses/olimpico-ca/1.jpg');
const img2OlimpicoCa = require('./images/buses/olimpico-ca/2.jpg');
const img3OlimpicoCa = require('./images/buses/olimpico-ca/3.jpg');
const croquisOlimpicoCa = require('./images/buses/olimpico-ca/croquis.jpg');

//Olimpico Melon
const img0OlimpicoMelon = require('./images/buses/olimpico-melon/0.jpg');
const img1OlimpicoMelon = require('./images/buses/olimpico-melon/1.jpg');
const img2OlimpicoMelon = require('./images/buses/olimpico-melon/2.jpg');
const img3OlimpicoMelon = require('./images/buses/olimpico-melon/3.jpg');
const croquisOlimpicoMelon = require('./images/buses/olimpico-melon/croquis.jpg');

//Dorado
const img0Dorado = require('./images/buses/dorado/0.jpg');
const img1Dorado = require('./images/buses/olimpico-melon/1.jpg');
const img2Dorado = require('./images/buses/olimpico-melon/2.jpg');
const img3Dorado = require('./images/buses/olimpico-melon/3.jpg');
const croquisDorado = require('./images/buses/dorado/croquis.jpg');

//Paradiso
const img0Paradiso = require('./images/buses/paradiso/0.jpg');
const img1Paradiso = require('./images/buses/paradiso/1.jpg');
const img2Paradiso = require('./images/buses/paradiso/2.jpg');
const img3Paradiso = require('./images/buses/paradiso/3.jpg');
const croquisParadiso = require('./images/buses/paradiso/croquis.jpg');

//Viaggio
const img0Viaggio = require('./images/buses/viaggio/0.jpg');
const img1Viaggio = require('./images/buses/viaggio/1.jpg');
const img2Viaggio = require('./images/buses/viaggio/2.jpg');
const img3Viaggio = require('./images/buses/viaggio/3.jpg');
const croquisViaggio = require('./images/buses/viaggio/croquis.jpg');




function Buses(){
    const [selectedBus, setBus] = useState('olimpico-ca');
    
    const [viewCroquis, setViewCroquis] = useState(false);

    const [busImages, setBusImages] = useState({
        img0: img0OlimpicoCa,
        img1: img1OlimpicoCa,
        img2: img2OlimpicoCa,
        img3: img3OlimpicoCa,
        croquis: croquisOlimpicoCa,
    });

    const OlimpicoCa = () =>{
        return(
            <div className='bus-info'>
                <h2 style={{margin: '1%'}}>Olimpico Detroid 6v92</h2><br />
                <p>- Unidad con 28 amplias plazas.</p>
                <p>- Aire acondicionado.</p>
                <p>- Pantallas de entretenimiento.</p>
                <p>- Cargadores para celular.</p>
                <p>- Bebidas de cortesia.</p>
                <p>-Seguro de viajero</p>
                <button type="button" className="btn btn-info" onClick={() => setViewCroquis(true)}>Ver Croquis...</button>
            </div>
        );
    }
    const OlimpicoMelon = () =>{
        return(
            <div className='bus-info'>
                <h2 style={{margin: '1%'}}>Olimpico Cummins 335</h2><br />
                <p>- Unidad con 28 amplias plazas.</p>
                <p>- Aire acondicionado.</p>
                <p>- Pantallas de entretenimiento.</p>
                <p>- Cargadores para celular.</p>
                <p>- Bebidas de cortesia.</p>
                <p>- Seguro de viajero.</p>
                <p>- W.C</p>
                <button type="button" className="btn btn-info" onClick={() => setViewCroquis(true)}>Ver Croquis...</button>
            </div>
            
        );
    }
    const Dorado = () =>{
        return(
            <div className='bus-info'>
                <h2 style={{margin: '1%'}}>Dorado</h2><br />
                <p>- Unidad con 43 plazas.</p>
                <p>- Aire acondicionado.</p>
                <p>- Pantallas de entretenimiento.</p>
                <p>- Cargadores para celular.</p>
                <p>- Bebidas de cortesia.</p>
                <p>- Seguro de viajero.</p>
                <p>- Amplio espacio para equipaje.</p>
                <p>- W.C</p>
                <button type="button" className="btn btn-info" onClick={() => setViewCroquis(true)}>Ver Croquis...</button>
            </div>
        );
    }
    const Paradiso = () =>{
        return(
            <div className='bus-info'>
                <h2 style={{margin: '1%'}}>Paradiso</h2><br />
                <p>- Unidad con 46 plazas.</p>
                <p>- Aire acondicionado.</p>
                <p>- Pantallas de entretenimiento.</p>
                <p>- Cargadores para celular.</p>
                <p>- Bebidas de cortesia.</p>
                <p>- Seguro de viajero</p>
                <p>- W.C</p>
                <button type="button" className="btn btn-info" onClick={() => setViewCroquis(true)}>Ver Croquis...</button>
            </div>
        );
    }
    const Viaggio = () =>{
        return(
            <div className='bus-info'>
                <h2 style={{margin: '1%'}}>Viaggio</h2><br />
                <p>- Unidad con 46 plazas.</p>
                <p>- Aire acondicionado.</p>
                <p>- Pantallas de entretenimiento.</p>
                <p>- Bebidas de cortesia.</p>
                <p>- Seguro de viajero</p>
                <p>- W.C</p>
                <button type="button" className="btn btn-info" onClick={() => setViewCroquis(true)}>Ver Croquis...</button>
            </div>
        );
    }

    useEffect(() => {
        switch (selectedBus) {
            case 'olimpico-ca':
                setBusImages({
                    img0: img0OlimpicoCa,
                    img1: img1OlimpicoCa,
                    img2: img2OlimpicoCa,
                    img3: img3OlimpicoCa,
                    croquis: croquisOlimpicoCa,
                });
                setBusI(OlimpicoCa);
                break;
                
            case 'olimpico-melon':
                setBusImages({
                    img0: img0OlimpicoMelon,
                    img1: img1OlimpicoMelon,
                    img2: img2OlimpicoMelon,
                    img3: img3OlimpicoMelon,
                    croquis: croquisOlimpicoMelon,
                });
                setBusI(OlimpicoMelon);
                break;

            case 'dorado':
                setBusImages({
                    img0: img0Dorado,
                    img1: img1Dorado,
                    img2: img2Dorado,
                    img3: img3Dorado,
                    croquis: croquisDorado,
                });
                setBusI(Dorado);
                break;

            case 'paradiso':
                setBusImages({
                    img0: img0Paradiso,
                    img1: img1Paradiso,
                    img2: img2Paradiso,
                    img3: img3Paradiso,
                    croquis: croquisParadiso,
                });
                setBusI(Paradiso);
                break;

            case 'viaggio':
                setBusImages({
                    img0: img0Viaggio,
                    img1: img1Viaggio,
                    img2: img2Viaggio,
                    img3: img3Viaggio,
                    croquis: croquisViaggio,
                });
                setBusI(Viaggio);
                break;

            default:
                setBusImages({
                    img0: img0OlimpicoCa,
                    img1: img1OlimpicoCa,
                    img2: img2OlimpicoCa,
                    img3: img3OlimpicoCa,
                    croquis: croquisOlimpicoCa,
                });
                setBusI(OlimpicoCa);
                break;
        }
    }, [selectedBus]);

    const [SelectedBusI, setBusI] = useState(OlimpicoCa);

    const BusInfo = () => {
            return(
                <section className='buses-sec1'>
                    <div>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={busImages.img0} className="imgCarr" alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img src={busImages.img1} className="imgCarr" alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img src={busImages.img2} className="imgCarr" alt=""/>
                                </div>
                                <div className="carousel-item"> 
                                    <img src={busImages.img3} className="imgCarr" alt=""/>
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
                    </div><hr/>
                    {SelectedBusI}  
                    
                    
                    
                </section>
            );
    }

    return(
        <>
            <Navbar/>

            <main className='main-buses'>

                <section className='buses-sec0'>
                        <form>
                        <div className="checkbox-container">
                        <input type="radio" id="checkbox-1" name="custom-radio" onClick={() => setBus("olimpico-ca")}/>
                        <label for="checkbox-1" className="checkbox-label img-1"></label>
                        </div>
                        <div className="checkbox-container">
                        <input type="radio" id="checkbox-2" name="custom-radio" onClick={() => setBus("olimpico-melon")}/>
                        <label for="checkbox-2" className="checkbox-label img-2"></label>
                        </div>
                        <div className="checkbox-container">
                        <input type="radio" id="checkbox-3" name="custom-radio" onClick={() => setBus("dorado")}/>
                        <label for="checkbox-3" className="checkbox-label img-3"></label>
                        </div>
                        <div className="checkbox-container">
                        <input type="radio" id="checkbox-4" name="custom-radio" onClick={() => setBus("paradiso")}/>
                        <label for="checkbox-4" className="checkbox-label img-4"></label>
                        </div>
                        <div className="checkbox-container">
                        <input type="radio" id="checkbox-5" name="custom-radio" onClick={() => setBus("viaggio")}/>
                        <label for="checkbox-5" className="checkbox-label img-5"></label>
                        </div>
                        </form>
                </section>
                
                <BusInfo/>

                <section className='croquis' style={viewCroquis ? {}:{display: 'none'}}>
                    <FaRegWindowClose size={28} className='close-croquis'
                    onClick={() => setViewCroquis(false)} />
                    <img src={busImages.croquis} alt=''/>
                </section>

            </main>

        </>
    );
}

export default Buses;