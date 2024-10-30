import { useEffect } from "react"// Herramienta React

// Componentes de complementación
import Projects from "./components/Projects"
import Skills from "./components/Skills"

import focus_section from "./functions/focus_section"// Función observadora para des-opacar la sección "projects"

export default function Main(){
    useEffect(()=>{focus_section()})
    
    return(
        <main className="main">
            <section className="projects" id="projects">
                <Projects/>
            </section>

            <section className="skills" id="skills">
                <Skills/>
            </section>
        </main>
    )
}