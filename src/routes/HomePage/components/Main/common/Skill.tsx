import { SkillComponentAttributes, SkillParams } from "../../../types/types"// Tipado para las Skills

export default function Skill({title, json}:SkillComponentAttributes){
    return(
        <article className="container-skills">
            <h3 className="skill-title">{ title }</h3>

            <ul className="skills-list">
                {
                     json.map(({id, icon, detail}:SkillParams)=>(
                        <li className="skill" key={id}>
                            <figure className="skill-icon">
                                <img src={icon} alt={`icon-tech-${id}`} draggable="false"/>
                            </figure>
                            <p className="skill-detail">{detail}</p>
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}