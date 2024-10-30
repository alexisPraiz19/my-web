import { useEffect } from "react"// Herramienta React
import AboutContent from "./common/AboutContent"// Componente de complementación
import fidein_about from "./functions/fidein_about"// Función "observadora" para activar animación "fidein" en los "figure"

export default function About(){
    useEffect(()=>{fidein_about()},[])

    return(
        <section className="about" id="about">
            <h1 className="about-title">Sobre mí</h1>
            
            <AboutContent img="/images/static/illustración-1.jpg">
               Aunque actualmente no cuento con <span className="gradient">experiencia</span> laboral directa en programación, sí tengo 
               experiencia en otros campos donde he trabajado <span className="gradient">en equipo</span>. Estas experiencias me han enseñado 
               a ser un <span className="gradient">excelente</span> compañero y empleado. Me encantaría que puedas comprobarlo.
            </AboutContent>

            <AboutContent img="/images/static/illustración-1.jpg">
               Me apasiona resolver problemas mediante <span className="gradient">código</span> y aprender nuevas y <span className="gradient">mejores </span> 
               formas de hacerlo. Inicialmente, me interesé por la programación debido a sus perspectivas salariales,
               pero pronto descubrí que es mi verdadera vocación y en lo que <span className="gradient">soy bueno</span>. Pronto me enamoré del mundo de la tecnología.
            </AboutContent>

            <AboutContent img="/images/static/collage.png">
               Durante <span className="gradient">dos años</span> mi formación profesional ha sido completamente autodidacta, 
               gracias a la documentación oficial, foros, y canales de YouTube. Mis principales <span className="gradient">referentes </span>
               y <span className="gradient">mentores</span> han sido Miguel Ángel Duran (midudev) y Lucas Dalto (Soy Dalto), cuyos recursos y 
               conocimientos han sido fundamentales en mi aprendizaje.
            </AboutContent>

            <AboutContent img="/images/static/ajedrez.jpg">
               Me apasiona jugar <span className="gradient">ajedrez</span>, ya que mejora mi capacidad lógica y de razonamiento. Esta práctica no solo 
               es divertida, sino que también me brinda numerosos beneficios cognitivos <span className="gradient">útiles</span> para este rubro. Aunque no he registrado
               oficialmente mi puntuación ELO, actualmente puedo competir con jugadores de nivel <span className="gradient">avanzado</span>, con puntuaciones superiores a 2000 ELO.
            </AboutContent>
        </section>
    )
}