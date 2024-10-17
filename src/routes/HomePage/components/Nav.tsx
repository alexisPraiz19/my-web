import { House, Fire, Comment, User, Portfolio } from "../../../assets/Icons"

export default function Nav(){
    return(
        <nav className="nav">
            <a href="#home">
                <House/>
                <span>Inicio</span>
            </a>

            <a href="#projects">
                <Portfolio/>
                <span>Proyectos</span>
            </a>

            <a href="#skills">
                <Fire/>
                <span>Habilidades</span>
            </a>

            <a href="#about">
                <User/>
                <span>Sobre mí</span>
            </a>

            <a href="#feedback">
                <Comment/>
                <span>Feedback</span>
            </a>
        </nav>
    )
}