import LiSkill from "./LiSkill" //Componente de complementación
import { Html, Css, Js, Ts, Sass, React, Git, GitHub } from "../../../../assets/Icons" //Icons

export default function CurrentSkill(){
    return(
        <article className="current">
                    <h3>Habilidades</h3>

                    <ul className="current-skills">
                        <LiSkill
                        icon={<Html/>}
                        detail="bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla"
                        title="HTML"
                        />

                        <LiSkill
                        icon={<Css/>}
                        detail="bla, bla, bla, bla, bla, bla, bla"
                        title="CSS"
                        />

                        <LiSkill
                        icon={<Js/>}
                        detail="bla, bla, bla, bla, bla, bla, bla"
                        title="JavaScript"
                        />

                        <LiSkill
                        icon={<Ts/>}
                        detail="bla, bla, bla, bla, bla, bla, bla"
                        title="TypeScript"
                        />

                        <LiSkill
                        icon={<Sass/>}
                        detail="bla, bla, bla, bla, bla, bla, bla"
                        title="Sass"
                        />

                        <LiSkill
                        icon={<React/>}
                        detail="bla, bla, bla, bla, bla, bla, bla"
                        title="React Js"
                        />

                        <LiSkill
                        icon={<Git/>}
                        detail="bla, bla, bla, bla, bla, bla, bla"
                        title="Git"
                        />

                        <LiSkill
                        icon={<GitHub/>}
                        detail="bla, bla, bla, bla, bla, bla, bla"
                        title="GitHub"
                        />
                    </ul>
                </article>
    )
}