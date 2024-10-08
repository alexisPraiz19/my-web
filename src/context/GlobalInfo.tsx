// Herramientas React
import { createContext, useEffect, useState } from "react";

export const GlobalInfoContext = createContext({});

export default function GlobalInfo({children}:any){
    const [projectsData, setProjectsData] = useState([{}]);

    useEffect(()=>{
        fetch("/json/projects.json")
        .then(response => response.json()
        .then(response => setProjectsData(response)));
    },[])
    
    return (
        <GlobalInfoContext.Provider value={{
            projectsData
        }}>
            { children }
        </GlobalInfoContext.Provider>
    )
}