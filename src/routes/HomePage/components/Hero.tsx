import Stars from "../../../assets/static/Stars" // Componente de animación

// Icons
import { Email, Linkedin } from "../../../assets/Icons"

// Funciones TS
import { open_modal, close_modal } from "../functions/modal_cv"
import alert_download from "../functions/alert_download"

export default function Hero(){
    return (
        <header className="header">
            <Stars/>

            {/*Figure*/}
            <figure className="hero-figure">
                <img src="/images/static/me.png" alt="foto de alexis" className="avatar"/>
                <div>
                    <figcaption>Alexis Leonel Praiz</figcaption>
                    <p>
                        Este es un texto de presentación que puedes leer ahora que la página está en desarrollo y así orientarte
                        en lo que haces c:
                    </p>
                </div>
            </figure>
            
            {/*Enlaces*/}
            <div className="hero-links">
                <div className="cv-links">
                    <button type="button" className="open-modal-cv" onClick={open_modal}>Ver CV</button>
                    <a href="/static/titulo del motovehiculo.pdf" onClick={alert_download}>Descargar CV</a>
                </div>

                <div className="contact-links">
                    <a href="mailto:alexispraiz18@gmail.com" title="mail"><Email/></a>
                    <a href="https://www.linkedin.com/in/alexis-praiz-880392265/" title="linkeind" target="_blank"><Linkedin/></a>
                </div>
            </div>
            
            {/*Modal*/}
            <dialog className="modal-cv" id="modal-cv">
                <iframe src="/images/static/me.png" allow="fullscreen" title="cv-pdf"/>
                <button type="submit" onClick={close_modal}>Cerrar</button>
            </dialog>
        </header>
    )
}