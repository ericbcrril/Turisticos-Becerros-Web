//Contactanos

//Compònnentes
import Navbar from "../components/misc/Navbar";
//Scrips
import sendMessage from "../scripts/sendWaMessage";
// Importar el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const CPH = ["523320293049-Dorado 1850", "523334567873-Dorado 1850", "523334567873-Dorado 1850", "523320293049-Dorado 1850"]
const celCL = CPH[Math.floor(Math.random() * CPH.length)]

function ContactUs(){
    return(<>

        <Navbar/>

        <main className="main-contactUs">
            <form onSubmit={sendMessage} className="form-contactUs">
                <label htmlFor="userName">Nombre:</label>
                <input type="text" name="userName" id="userName" placeholder="¿Cual es tu nombre?" required={true}/>
                <label htmlFor="message">Mensaje:</label>
                <textarea type="text" name="message" id="message" rows={10} placeholder="Hola me gustaria viajar a..." required={true}/>
                <label htmlFor="busContact">Unidad de su preferencia:</label>
                <select name="busContact" id="busContact" className="select-bus">
                    <option value="523317423173-Olimpico 053">Olimpico 053</option>
                    <option value="523317423173-Olimpico 151">Olimpico 151</option>
                    <option value={celCL}>Dorado 1850</option>
                    <option value="523310219872-Paradiso">Paradiso</option>
                    <option value="523317423173-Viaggio">Viaggio</option>
                </select>
                <input type="reset" value="Borrar" className="btn-form-contactUs"/>
                <input type="submit" value="Enviar" className="btn-form-contactUs"/>
            </form>
        </main>
        
        </>);
}

export default ContactUs;