/* Tipado de Proyectos */
export type Project = {
    id: string,
    images: {
        desktop: string,
        mobile: string
    },
    tools: {}[],
    title: string,
    description: string,
    favourite: boolean,
    repo: string,
    view: string
}
export interface SkillParams{
    id: string;
    icon: string;
    detail: string;
}

export interface SkillComponentAttributes{
    title: string;
    json: SkillParams[]
}

export interface ProjectsParams{
    isDesktopImage: boolean;
    project: Project[];
}

export interface ToolsParams{
    tool: string;
    icon: string;
    shadow: string;
}