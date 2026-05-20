"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Expand, X } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Neon", "Name Plates", "Acrylic", "MDF", "Commercial"];

const imageFiles = Array.from({ length: 27 }, (_, index) => `/image${index + 1}.jpeg`);
const spanClasses = [
  "col-span-1 md:col-span-2 md:row-span-2",
  "col-span-1 md:col-span-1",
  "col-span-1 md:col-span-1",
  "col-span-1 md:col-span-1",
  "col-span-1 md:col-span-2",
];

const projects = imageFiles.map((image, index) => ({
  id: index + 1,
  title: `Portfolio ${String(index + 1).padStart(2, "0")}`,
  category: categories[(index % (categories.length - 1)) + 1],
  image,
  colSpan: spanClasses[index % spanClasses.length],
}));

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            Selected Work
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Our <span className="text-neon-pink text-glow">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 leading-7"
          >
            A glimpse into our finest creations. Crafted with precision, designed to stand out.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === cat
                  ? "bg-white text-black border-white shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
                  : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/8 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[240px]">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/8 bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${project.colSpan}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transform group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 p-5 bg-gradient-to-t from-black/75 via-black/35 to-transparent">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75">
                      {project.category}
                    </span>
                    <h3 className="mt-3 text-xl md:text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    <Expand size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/90 backdrop-blur-sm transition hover:bg-black"
              aria-label="Close image preview"
            >
              <X size={18} />
            </button>
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="100vw"
                className="object-contain bg-black"
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/45">{selectedProject.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{selectedProject.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
