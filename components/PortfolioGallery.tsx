"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Expand } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Neon Cafe Sign",
    category: "Neon",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=800&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Corporate Name Plate",
    category: "Name Plates",
    image: "https://images.unsplash.com/photo-1542744094-24638ea095b5?q=80&w=800&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    id: 3,
    title: "3D Acrylic Letters",
    category: "Acrylic",
    image: "https://images.unsplash.com/photo-1598425237654-4c05bf6236b5?q=80&w=800&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    id: 4,
    title: "MDF Laser Cut Panel",
    category: "MDF",
    image: "https://images.unsplash.com/photo-1629904853716-f0cb54ce96ce?q=80&w=800&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    id: 5,
    title: "Storefront Glow Sign",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
  },
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Neon", "Name Plates", "Acrylic", "MDF", "Commercial"];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-neon-pink text-glow">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A glimpse into our finest creations. Crafted with precision, designed to stand out.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-neon-pink text-white shadow-[0_0_15px_rgba(255,0,127,0.5)]"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${project.colSpan}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <span className="text-neon-pink text-sm font-semibold tracking-wider uppercase mb-1">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white flex items-center justify-between">
                  {project.title}
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Expand size={18} />
                  </div>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
