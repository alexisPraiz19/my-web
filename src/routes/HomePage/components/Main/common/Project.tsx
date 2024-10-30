import { Link } from "react-router-dom"//Herramienta React
import { Star } from "../../../../../assets/Icons"// Icono de estrella
import { ProjectsParams } from "../../../types/types"

export default function Project({isDesktopImage, project}:ProjectsParams){
    return (
        <>
            {
            project.map(({id, images, description, favourite, title, tools, view}) =>(
                <article key={id} className="project" draggable>
                    {
                        favourite &&
                        <span className="favourite">
                           <Star/>
                           Favorito
                        </span>
                    }

                    <figure className="thumbnail-container">
                        <img 
                        src={isDesktopImage ? images.desktop : images.mobile} 
                        alt="project thumbnail"  className="thumbnail"/>
                        <p className="description">{description}</p>
                    </figure>

                    <div className="project-links"> 
                        <a href={view} className="see-web" target="_blank">Web</a>
                        <Link to={`project/${id}`} className="see-details">Detalles</Link>
                    </div>

                    <h2 className="project-title">{title}</h2>

                    <ul className="tools">
                        {
                            tools.map(({tool, icon, shadow}:any)=>(
                                <li className="tool" key={tool} style={{boxShadow: `${shadow}`}}  >
                                    {icon && <img src={icon} alt="tool-icon" className="tool-icon"/>}
                                    {tool}
                                </li>
                            ))
                        }
                    </ul>
                </article>
            ))
            }
        </>
    )
}