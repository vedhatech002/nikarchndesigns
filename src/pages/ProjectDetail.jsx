// src/pages/ProjectDetail.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import SAMPLE_PROJECTS from "./sampleProjects";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // prefer passed state project, fallback to lookup
  const project =
    location.state?.project ||
    SAMPLE_PROJECTS.find((p) => String(p.id) === String(id));

  // category in state could be slug string or object — accept both
  const passedCategory = location.state?.category;
  const categorySlug =
    typeof passedCategory === "string" ? passedCategory : passedCategory?.slug;

  // index of active section (we'll render that first)
  const sections = project?.sections || [];
  const defaultIndex = 0;
  const foundIndex = categorySlug
    ? sections.findIndex((s) => String(s.slug) === String(categorySlug))
    : -1;

  // reorder sections so selected one comes first (but preserve original order for rest)
  const section = project?.sections?.[foundIndex];

  useEffect(() => {
    // smooth anchor scrolling while on this page
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev || "";
    };
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center p-6">
          <p className="mb-6">Project not found.</p>
          <button
            onClick={() => navigate("/projects")}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Back to projects
          </button>
        </div>
      </main>
    );
  }

  const MetaItem = ({ label, value }) => (
    <div>
      <div className="text-gray-400 text-sm">{label}</div>
      <div className="text-white font-medium mt-1">{value || "—"}</div>
    </div>
  );

  return (
    <main className="font-serif text-silver-300 bg-black">
      {/* HERO — full size, slight opacity, no text */}
      <section
        aria-label="project-hero"
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: "var(--nav-h,72px)" }}
      >
        <img
          src={section?.heroImg}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent" />
      </section>

      {/* Title + Meta of the selected section */}
      <section className="mx-auto px-6 md:px-12 mt-16">
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            {section?.title}
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-4xl py-6">
          <MetaItem label="Location" value={section?.location} />
          <MetaItem label="Site area" value={section.site_area} />
          <MetaItem label="Built-up area" value={section?.built_up_area} />
          <MetaItem label="Status" value={section?.status} />
        </div>
      </section>

      {/* Text + Image pairs for the selected section (use texts[] + subImgs[]) */}
      <section className=" mx-auto px-6 md:px-12 py-8 space-y-12 mb-6">
        <article id={`section-${section?.slug}`} key={section.slug || sIdx}>
          <div className="space-y-8">
            {section?.subImgs.map((img, i) => {
              const text = section?.texts[i];
              const imageOnLeft = i % 2 === 1; // pattern: 0 -> image right; 1 -> image left; 2 -> image right...
              return (
                <div key={i} className="grid grid-cols-1  gap-8 items-center">
                  {/* Left column: either text or image depending on imageOnLeft */}
                  {/* {imageOnLeft ? (
                    <>
                      <div className="lg:col-span-5 order-1">
                        {img ? (
                          <button
                            onClick={() => openSectionLightbox(subImgs, i)}
                            className="block w-full overflow-hidden rounded-md shadow-lg focus:outline-none"
                            aria-label="Open image"
                          >
                            <img
                              src={img}
                              alt={` ${i + 1}`}
                              className="w-full h-[42vh] object-cover rounded-md"
                              loading="lazy"
                              draggable={false}
                            />
                          </button>
                        ) : null}
                      </div>

                      <div className="lg:col-span-7 order-2">
                        <p
                          className="text-silver-300 leading-relaxed "
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {text}
                        </p>
                      </div>
                    </>
                  ) : ( */}

                  <div className="">
                    <p
                      className="text-silver-300 leading-relaxed text-justify"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {text}
                    </p>
                  </div>

                  <div className="">
                    {img ? (
                      <img
                        src={img}
                        alt={` ${i + 1}`}
                        className="w-full sm:h-[80vh] object-cover rounded-md"
                        loading="lazy"
                        draggable={false}
                      />
                    ) : null}
                  </div>

                  {/* )} */}
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
}
