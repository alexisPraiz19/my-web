import { useEffect } from "react"// Herramienta React
import ContactLinks from "../../../../common/ContactLinks"// Componente de complementación
import fidein_feedback from "./functions/fidein_feedback"// Función "observadora" para activar animación "fidein" del formulario "feedback"

export default function Footer(){
    useEffect(()=>{fidein_feedback()});

    return(
        <footer className="footer" id="feedback">
            <article className="salary">
                <div className="titles">
                    <h2 className="footer-title">¡Sin rodeos🥳!</h2>
                    <h3 className="footer-title">Expectativas salariales <em>neto</em></h3>
                </div>

                <div className="expectation">
                    <p><strong>Remuneración mínima:</strong> ARS $460.000 (<em>469 Dólar estadounidense</em>)</p>
                    <p><strong>Remuneración ideal:</strong> ARS $510.000 (<em>520 Dólar estadounidense</em>)</p>
                </div>

                <ContactLinks/>
            </article>
            
            <form action="" className="feedback-form">
                <legend className="feedback-paragraph">
                    Gracias por ver! Todo feedback es bien recibido :) ¿Ves algo mejorable, agregable? 
                    Comentalo aquí
                </legend>
                
                <textarea name="feedback" className="input" placeholder="..."></textarea>
                <button type="submit" className="submit">enviar</button>
            </form>
        </footer>
    )
}