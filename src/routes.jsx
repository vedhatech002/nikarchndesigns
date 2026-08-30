import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // top-level layout (Navigation + outlet or you can have separate layout)
import Home from "./pages/Home";
import Exhibitions from "./pages/Exhibitions";
import Contact from "./components/Contact";
import About from "./components/About";
import ProjectDetail from "./pages/ProjectDetail";
import CategoryDetail from "./components/CategoryDetail";
import SAMPLE_PROJECTS from "./pages/sampleProjects";
import SAMPLE_EXHIBITION_PROJECTS from "./pages/sampleExhibitionProjects";
import Project from "./components/Project";

// Combined list so a direct/refreshed link to a category detail page
// resolves whether the project is an architecture or exhibition project.
const ALL_PROJECTS = [...SAMPLE_PROJECTS, ...SAMPLE_EXHIBITION_PROJECTS];

const routes = [
  {
    path: "/",
    element: <App />, // App must render <Outlet /> where pages are mounted
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "Exhibitions", element: <Exhibitions /> },
      { path: "contact", element: <Contact /> },
      { path: "projects/:id", element: <Project /> }, // list / detail landing
      {
        path: "projects/:projectId/category/:slug",
        element: <CategoryDetail projectsData={ALL_PROJECTS} />,
      },
      { path: "projects/:id/detail", element: <ProjectDetail /> },
    ],
  },
];

export const createClientRouter = () => createBrowserRouter(routes);

export default routes;
