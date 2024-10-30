import { current, comming_soon } from "../json/skills.json"// Información de las "skills" a renderizar
import Skill from "../common/Skill"// Componente de complementación

export default function Skills(){
    return(
        <>
           <Skill
           title="Habilidades"
           json={current}
           />

           <Skill
           title="Próximamente / Deseados"
           json={comming_soon}
           />
        </>
    )
}