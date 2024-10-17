import { ReactNode } from "react";

/* Tipado de Proyectos */
export type Project = {
    id: string,
    images: {
        desktop: string,
        mobile: string
    },
    tools: [],
    title: string,
    description: string,
    favourite: boolean,
    repo: string,
    view: string
}

export type AttributeProject = { 
    projects: {
        id: string;
        images: {
            desktop: string;
            mobile: string;
        };
        tools: string[];
        title: string;
        description: string;
        favourite: boolean;
        repo: string;
        view: string;
    }[],
    isDesktopImage: boolean
}

export type LiSkillParams = {
    icon: ReactNode,
    title: string
    detail?: string,
}