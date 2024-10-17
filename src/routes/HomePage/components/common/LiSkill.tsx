import { LiSkillParams } from "../../types/types" // Types

export default function LiSkill({icon, title, detail}:LiSkillParams){
    return(
        <>
            <li className="skill" title={title}>
                {icon}
                <p className="skill-detail">{detail}</p>
            </li>
        </>
    )
}