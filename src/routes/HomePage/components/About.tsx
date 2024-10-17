export default function About(){
    return(
        <section className="about" style={{width: "70%", marginInline: "auto", marginTop: "80px"}}>
            <div style={{display: "flex", alignItems: "center", flexDirection: "row-reverse"}}>
                <img src="/images/static/illustración-1.jpg" alt="s" style={{width: "260px"}}/>
                <p>
                    Aunque actualmente no cuento con experiencia laboral directa en programación, sí tengo experiencia 
                    en otros campos donde he trabajado en equipo. Estas experiencia me han enseñado a ser un excelente
                    compañero y empleado.
                    Me encantaría que puedas comprobarlo.
                </p>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
                <img src="/images/static/illustración-1.jpg" alt="s" style={{width: "260px"}}/>
                <p>
                   Me apasiona resolver problemas mediante código y aprender nuevas y mejores formas de hacerlo. Inicialmente, 
                   me interesé por la programación debido a sus perspectivas salariales, pero pronto descubrí que es mi
                   verdadera vocación y en lo que soy bueno.
                   Pronto me enamoré del mundo de la tecnología.
                </p>
            </div>

            <div style={{display: "flex", alignItems: "center", flexDirection: "row-reverse"}}>
                <img src="/images/static/collage.png" alt="s" style={{width: "260px"}}/>
                <p>
                    Durante dos años mi formación profesional ha sido completamente autodidacta, gracias a la documentación oficial, foros, y
                    canales de YouTube. Mis principales referentes y mentores han sido Miguel Ángel Duran (midudev) y Lucas 
                    (Soy Dalto), cuyos recursos y conocimientos han sido fundamentales en mi aprendizaje.
                </p>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
                <img src="/images/static/ajedrez.jpg" alt="s" style={{width: "260px"}}/>
                <p>
                    Me apasiona jugar ajedrez, ya que mejora mi capacidad lógica y de razonamiento. Esta práctica no
                    solo es divertida, sino que también me brinda numerosos beneficios cognitivos. Aunque no he registrado
                    oficialmente mi puntuación ELO, actualmente puedo competir con jugadores de nivel avanzado, con puntuaciones
                    superiores a 2000 ELO.
                </p>
            </div>
        </section>
    )
}