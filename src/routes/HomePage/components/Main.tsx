import { useState } from "react" // Herramientas React

// Componentes de complementación
import Projects from "./common/Projects"
import CurrentSkill from "./common/CurrentSkill"
import CommingSoonSkill from "./common/CommingSoonSkill"

// Otros
import { projects } from "../../../assets/json/projects.json"

export default function Main(){
    const [isdesktopImage, setIsDesktopImage] = useState(true);

    return(
        <main className="main">
            <section className="projects">
                <h1 className="section-title">Proyectos</h1>
                
                <button type="button" className="change-thumbnail" onClick={()=>{isdesktopImage ? setIsDesktopImage(false) : setIsDesktopImage(true)}}>
                    Ver minuatura mobile
                </button>

                <Projects 
                isDesktopImage={isdesktopImage}
                projects={projects}
                /> 
            </section>

            <section className="skills" id="skills">
                <CurrentSkill/>
                <CommingSoonSkill/>
            </section>
        </main>
    )
}