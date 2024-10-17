export default function Footer(){
    return(
        <footer className="footer" id="feedback">
            <article className="salary">
                <h3>¡Sin rodeos🥳!</h3>
                <span>Expectativas salariales <em>neto</em></span>

                <p>Remuneración mínima: ARS $460.000 (469 Dólar estadounidense)</p>
                <p>Remuneración ideal: ARS $510.000 (520 Dólar estadounidense)</p>
            </article>
            
            <form action="" className="feedback-form">
                <legend>Gracias por ver! Todo feedback es bien recibido :) ¿Ves algo mejorable? Comentalo aquí</legend>
                <input type="text" name="feedback"></input>
                <button type="submit">enviar</button>
            </form>
        </footer>
    )
}