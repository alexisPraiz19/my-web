import LiSkill from "./LiSkill" //Componente de complementación
import { Node, Python, MySql, Tailwind, Astro, Aws, Express } from "../../../../assets/Icons" //Icons

export default function CommingSoonSkill(){
    return(
        <article className="comming-soon">
            <h3>Próximamente/Deseados</h3>

            <ul className="comingsoon-skills">
                <LiSkill
                icon={<Node/>}
                title="Node Js"
                />

                <LiSkill
                icon={<Express/>}
                title="express"
                />

                <LiSkill
                icon={<MySql/>}
                title="MySql"
                />
                
                <LiSkill
                icon={<Tailwind/>}
                title="Tailwind"
                />
                
                <LiSkill
                icon={<Astro/>}
                title="Astro"
                />

                <LiSkill
                icon={<Aws/>}
                title="AWS"
                />

                <LiSkill
                icon={<Python/>}
                title="Phython"
                />
            </ul>
        </article>
    )
}