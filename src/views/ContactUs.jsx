//Contactanos

//Compònnentes
import Navbar from "../components/misc/Navbar";
//Scrips
import sendMessage from "../scripts/sendWaMessage";
// Importar el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs(){
    return(<>

        <Navbar/>

        <main className="main-contactUs">
            <form onSubmit={sendMessage} className="form-contactUs">
                <label htmlFor="userName">Nombre:</label>
                <input type="text" name="userName" id="userName" placeholder="¿Como te llamas?" required={true}/>
                <label htmlFor="message">Mensaje:</label>
                <textarea type="text" name="message" id="message" rows={10} placeholder="Hola me gustaria saber acerca de..." required={true}/>
                <label htmlFor="busContact">Unidad de su preferencia:</label>
                <select name="busContact" id="busContact" className="select-bus">
                    <option value="523318435194">Olimpico Detroid 6v92</option>
                    <option value="523318435194">Olimpico Cummins 335</option>
                    <option value="523318435194">Dorado</option>
                    <option value="523318435194">Paradiso</option>
                    <option value="523318435194">Viaggio</option>
                </select>
                <input type="reset" value="Borrar" className="btn-form-contactUs"/>
                <input type="submit" value="Enviar" className="btn-form-contactUs"/>
            </form>
        </main>
        
        </>);
}

export default ContactUs;