import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App"; // top-level layout (Navigation + outlet or you can have separate layout)
import Home from "./pages/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import ProjectDetail from "./pages/ProjectDetail";
import CategoryDetail from "./components/CategoryDetail";
import SAMPLE_PROJECTS from "./pages/sampleProjects";
import Project from "./components/Project";

const routes = [
  {
    path: "/",
    element: <App />, // App must render <Outlet /> where pages are mounted
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      //   { path: "portfolio", element: <Portfolio /> },
      //   { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "projects/:id", element: <Project /> }, // list / detail landing
      {
        path: "projects/:projectId/category/:slug",
        element: <CategoryDetail projectsData={SAMPLE_PROJECTS} />,
      },
      { path: "projects/:id/detail", element: <ProjectDetail /> },
    ],
  },
];

export const createClientRouter = () => createBrowserRouter(routes);

export default routes;
