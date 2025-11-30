// src/components/Project.jsx
import React, { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import SAMPLE_PROJECTS from "../pages/sampleProjects"; // adjust path if needed

const cardFade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const Project = ({ project: projectProp }) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const projectIdParam = params.projectId || params.id; // support :projectId or :id

  // resolve project: prefer prop, otherwise lookup by URL param
  const project = useMemo(() => {
    if (projectProp) return projectProp;
    if (!projectIdParam) return null;
    return SAMPLE_PROJECTS.find((p) => String(p.id) === String(projectIdParam));
  }, [projectProp, projectIdParam, location.state?.project]);

  if (!project) return null; // you may replace with a friendly fallback UI

  // helper to detect residential / healthcare projects
  const _norm = (v = "") => v.toString().toLowerCase();
  const type = _norm(project.type);
  const title = _norm(project.title);

  const isResidential =
    type.includes("residential") ||
    title.includes("residential") ||
    title.includes("residentials") ||
    title.includes("residenc"); // fuzzy catch
  const isHealthcare =
    type.includes("health") ||
    type.includes("healthcare") ||
    title.includes("hospital") ||
    title.includes("health");

  const openCategory = (cat) => {
    if (!cat) return;
    if (isResidential || isHealthcare) {
      navigate(`/projects/${project.id}/detail`, {
        state: { project, category: cat.slug },
      });
      return;
    }
    navigate(`/projects/${project.id}/category/${cat.slug}`, {
      state: { project },
    });
  };

  return (
    <section className="bg-black text-silver-300 font-serif py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl text-silver-100 font-semibold">
            {project.title}
          </h2>

          {/* render multi-paragraph leadin nicely */}
          {project.leadin &&
            String(project.leadin)
              .split("\n\n")
              .map((p, i) => (
                <p
                  key={i}
                  className="mt-4 text-silver-300 max-w-3xl leading-relaxed"
                >
                  {p}
                </p>
              ))}
        </div>

        {/* Category grid (cards) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-start"
        >
          {project.categories?.length ? (
            project.categories.map(
              (cat, i) =>
                cat.slug && (
                  <motion.button
                    key={cat.slug}
                    onClick={() => openCategory(cat)}
                    variants={cardFade}
                    transition={{ delay: i * 0.06, duration: 0.45 }}
                    className="group text-left bg-zinc-900 rounded-lg overflow-hidden border border-silver-400/6 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-silver-400/10"
                  >
                    <div className="w-full h-48 md:h-56 bg-zinc-800 overflow-hidden">
                      <img
                        src={cat.thumb}
                        alt={`${cat.title} thumbnail`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>

                    <div className="p-5 bg-black/80">
                      <p className="text-xs uppercase tracking-widest text-silver-400">
                        {cat.title || cat.label}
                      </p>
                      <h3 className="mt-2 text-xl text-silver-100 font-semibold">
                        {cat.label}
                      </h3>
                      <p className="mt-3 text-silver-300 text-sm">
                        {cat.short}
                      </p>

                      <div className="mt-4">
                        <span className="text-silver-300 border-b border-silver-400/10 pb-0.5">
                          View →
                        </span>
                      </div>
                    </div>
                  </motion.button>
                )
            )
          ) : (
            <div className="col-span-full text-silver-400">
              <p>No categories available for this project.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
