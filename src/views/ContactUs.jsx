// Mejoras al formulario de contacto

//Componentes
import Navbar from "../components/misc/Navbar";
//Scripts
import sendMessage from "../scripts/sendWaMessage";
// Importar el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const CPH = [
    "523320293049-Dorado 1850", 
    "523334567873-Dorado 1850", 
    "523334567873-Dorado 1850", 
    "523320293049-Dorado 1850"
];
const celCL = CPH[Math.floor(Math.random() * CPH.length)];

function ContactUs() {
    return (
        <>
            <Navbar />

            <main className="main-contactUs">
                <form onSubmit={sendMessage} className="form-contactUs shadow-lg p-4 bg-white rounded">
                    <h2 className="text-center mb-4">Contáctanos</h2>

                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">Nombre:</label>
                        <input 
                            type="text" 
                            name="userName" 
                            id="userName" 
                            className="form-control" 
                            placeholder="¿Cuál es tu nombre?" 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensaje:</label>
                        <textarea 
                            name="message" 
                            id="message" 
                            rows={5} 
                            className="form-control" 
                            placeholder="Hola, me gustaría viajar a..." 
                            required
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="busContact" className="form-label">Unidad de su preferencia:</label>
                        <select 
                            name="busContact" 
                            id="busContact" 
                            className="form-select"
                        >
                            <option value="523317423173-Olimpico 053">Olimpico 053</option>
                            <option value="523317423173-Olimpico 151">Olimpico 151</option>
                            <option value={celCL}>Dorado 1850</option>
                            <option value="523310219872-Paradiso">Paradiso</option>
                            <option value="523317423173-Viaggio">Viaggio</option>
                        </select>
                    </div>

                    <div className="d-flex justify-content-between">
                        <button 
                            type="reset" 
                            className="btn btn-danger w-45"
                        >
                            Reiniciar
                        </button>
                        <button 
                            type="submit" 
                            className="btn btn-success w-45"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default ContactUs;

// Estilos CSS

