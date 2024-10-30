import { House, Fire, Comment, User, Portfolio } from "../../../../assets/Icons"// Iconos
import { open_menu } from "./functions/open_menu"// Función abrir menú

export default function Nav(){
    return(
        <nav className="nav">
            <img src="/svg/burger.svg" alt="icon-burger" className="burger" onClick={open_menu}/>

            <div className="nav-links">
                <a href="#home" className="nav-link">
                    <House/>
                    <span className="go-to">Inicio</span>
                </a>

                <a href="#projects" className="nav-link">
                    <Portfolio/>
                    <span className="go-to">Proyectos</span>
                </a>

                <a href="#skills" className="nav-link">
                    <Fire/>
                    <span className="go-to">Habilidades</span>
                </a>

                <a href="#about" className="nav-link">
                    <User/>
                    <span className="go-to">Sobre mí</span>
                </a>

                <a href="#feedback" className="nav-link">
                    <Comment/>
                    <span className="go-to">Feedback</span>
                </a>
            </div>
        </nav>
    )
}