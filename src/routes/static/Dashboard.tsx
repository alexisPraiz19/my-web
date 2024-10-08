import { Link, Outlet } from "react-router-dom";

export default function Dashboard(){
    return(
        <>
           <nav className="dashboard" style={{display: "flex", gap: "10px", flexDirection: "column"}}>
               <Link to="/project/html">html</Link>
               <Link to="/project/css">css</Link>
               <Link to="/project/js">js</Link>
               <Link to="/project/scss">scss</Link>
               <Link to="/">Inicio</Link>
           </nav>
           <Outlet/>
        </>
    )
}