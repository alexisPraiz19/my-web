import './scss/index.scss'; // Estilos

// Herramientas React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Contexto 
import GlobalInfo from './context/GlobalInfo.tsx';

// Componentes principales de renderización
import Home from './routes/HomePage/Home.tsx';
import ProjectDetails from './routes/ProjectDetailsPage/ProjectDetails.tsx';
import Dashboard from './routes/static/Dashboard.tsx';
import NotFound from './routes/NotFoundPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound/>
  },
  {
    path: "/project",
    element: <Dashboard/>,
    children: [
      {
        path: "/project/:projectId",
        element: <ProjectDetails/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalInfo>
      <RouterProvider router={router}/>
    </GlobalInfo>
  </StrictMode>,
)