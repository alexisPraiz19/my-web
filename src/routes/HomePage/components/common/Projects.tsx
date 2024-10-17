// Herramientas React
import { Link } from "react-router-dom";

// Otros
import { Star } from "../../../../assets/Icons";
import { AttributeProject } from "../../types/types";

export default function Projects({isDesktopImage, projects}:AttributeProject){
    return (
        <>
            {projects.map(({id, images, description, favourite, title, tools, view}) =>(
                <article key={id} className="project">
                    {
                       favourite &&
                       <span className="favourite">
                           <Star/>
                           Favourite
                        </span>
                    }

                    <figure className="thumbnail">
                        <img src={isDesktopImage ? images.desktop : images.mobile} alt="project thumbnail"/>
                        <p className="description">{description}</p>
                    </figure>

                    <div className="project-links"> 
                        <a href={view} target="_blank">Vista</a>
                        <Link to={`project/${id}`}>Detalles</Link>
                    </div>

                    <h3 className="title">{title}</h3>

                    <div className="tools">
                        {
                            tools.map((tool:string)=>(
                                <span className="tool" key={tool}>{tool}</span>
                            ))
                        }
                    </div>
                </article>
            ))}
        </>
    )
}