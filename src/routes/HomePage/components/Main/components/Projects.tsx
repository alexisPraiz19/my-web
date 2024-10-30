import { useState } from "react"// Herramienta React
import { projects } from "../json/projects.json"// Información de los proyectos a renderizar
import Project from "../common/Project"// Componente de complementación

export default function Projects(){
    const [isdesktopImage, setIsDesktopImage] = useState(true);
    return(
        <>
            <h1 className="projects-title">Proyectos</h1>
                
            <button type="button" className="change-thumbnail" onClick={()=>{
                isdesktopImage
                  ? setIsDesktopImage(false)
                  : setIsDesktopImage(true)
            }}>
                Ver minuatura {isdesktopImage ? "mobile" : "desktop"}
            </button>

            <div className="projects-container">
                <Project
                isDesktopImage={isdesktopImage}
                project={projects}
                />
            </div>
        </>
    )
}