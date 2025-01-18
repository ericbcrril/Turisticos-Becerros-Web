//Unidades
import { useState, useEffect } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
//Componentes
import Navbar from '../components/misc/Navbar';
// Importar el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Opcional: Importar JavaScript si usas componentes que requieren JavaScript (como modales o tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Oilimpico CA Imagenes por defecto
const img0OlimpicoCa = 'images/buses/olimpico-ca/webp/0.webp';
const img1OlimpicoCa = 'images/buses/olimpico-ca/webp/1.webp';
const img2OlimpicoCa = 'images/buses/olimpico-ca/webp/2.webp';
const img3OlimpicoCa = 'images/buses/olimpico-ca/webp/3.webp';
const img4OlimpicoCa = 'images/buses/olimpico-ca/webp/4.webp';
const croquisOlimpicoCa = 'images/buses/olimpico-ca/webp/croquis.webp';

function Buses(){
    const [selectedBus, setBus] = useState('olimpico-ca');
    
    const [viewCroquis, setViewCroquis] = useState(false);

    const [busImages, setBusImages] = useState({
        img0: img0OlimpicoCa,
        img1: img1OlimpicoCa,
        img2: img2OlimpicoCa,
        img3: img3OlimpicoCa,
        img4: img4OlimpicoCa,
        croquis: croquisOlimpicoCa,
    });

    const OlimpicoCa = () =>{
        return(
            <div className='bus-info' >
                <h2 style={{margin: '1%'}}>Olimpico 053<div className="scroll-indicator" 
                     onClick={() => window.scrollBy(0, window.innerHeight)}>
                    <span className="arrow">👇 Desliza 👆</span>
                </div></h2><br />
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
                <h2 style={{margin: '1%'}}>Olimpico 151<div className="scroll-indicator" 
                     onClick={() => window.scrollBy(0, window.innerHeight)}>
                    <span className="arrow">👇 Desliza 👆</span>
                </div></h2><br />
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
                <h2 style={{margin: '1%'}}>Dorado 1850<div className="scroll-indicator" 
                     onClick={() => window.scrollBy(0, window.innerHeight)}>
                    <span className="arrow">👇 Desliza 👆</span>
                </div></h2><br />
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
                <h2 style={{margin: '1%'}}>Paradiso<div className="scroll-indicator" 
                     onClick={() => window.scrollBy(0, window.innerHeight)}>
                    <span className="arrow">👇 Desliza 👆</span>
                </div></h2><br />
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
                <h2 style={{margin: '1%'}}>Viaggio<div className="scroll-indicator" 
                     onClick={() => window.scrollBy(0, window.innerHeight)}>
                    <span className="arrow">👇 Desliza 👆</span>
                </div></h2><br />
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

    //Refrescar info cuando bus seleccionado cambie (selectedBus)
    useEffect(() => {
        const img0    = `/images/buses/${selectedBus}/webp/0.webp`;
        const img1    = `/images/buses/${selectedBus}/webp/1.webp`;
        const img2    = `/images/buses/${selectedBus}/webp/2.webp`;
        const img3    = `/images/buses/${selectedBus}/webp/3.webp`;
        const img4    = `/images/buses/${selectedBus}/webp/4.webp`;
        const croquis = `/images/buses/${selectedBus}/webp/croquis.webp`;
    
        setBusImages({
            img0: img0,
            img1: img1,
            img2: img2,
            img3: img3,
            img4: img4,
            croquis: croquis,
        });

        switch (selectedBus) {
            case 'olimpico-ca':
                setBusI(OlimpicoCa);
                break;
                
            case 'olimpico-melon':
                setBusI(OlimpicoMelon);
                break;

            case 'dorado':
                setBusI(Dorado);
                break;

            case 'paradiso':
                setBusI(Paradiso);
                break;

            case 'viaggio':
                setBusI(Viaggio);
                break;

            default:
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
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
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
                                <div className="carousel-item"> 
                                    <img src={busImages.img4} className="imgCarr" alt=""/>
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
                    <img src={busImages.croquis} alt='BUSES'/>
                </section>

            </main>

        </>
    );
}

export default Buses;