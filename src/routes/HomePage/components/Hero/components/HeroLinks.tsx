import ContactLinks from "../../../../../common/ContactLinks" // Componente de complementación
// Funciones Ts
import { open_modal } from "../functions/open_modal"
import alert_download from "../functions/alert_download"

export default function HeroLinks(){
    return(
        <div className="hero-links">
            <ContactLinks/>

            <div className="cv-links">
                <button type="button" className="open-modal-cv" onClick={open_modal}>Ver CV</button>
                <a href="/static/titulo del motovehiculo.pdf" className="download-cv" onClick={alert_download}>Descargar CV</a>
            </div>
        </div>
    )
}