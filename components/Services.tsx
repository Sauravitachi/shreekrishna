"use client";

import { motion } from "framer-motion";
import { Lightbulb, LayoutPanelLeft, Scissors, Box, Megaphone, Store, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Lightbulb size={32} className="text-neon-cyan" />,
    title: "Neon Sign Boards",
    description: "Custom LED neon signs that make your brand glow. Perfect for cafes, offices, and events.",
    glow: "hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]",
  },
  {
    icon: <LayoutPanelLeft size={32} className="text-neon-purple" />,
    title: "Premium Name Plates",
    description: "Elegant and durable name plates for homes and offices, crafted with precision.",
    glow: "hover:shadow-[0_0_30px_rgba(176,38,255,0.3)]",
  },
  {
    icon: <Box size={32} className="text-neon-pink" />,
    title: "Acrylic Designs",
    description: "High-quality acrylic letters and boards offering a 3D, premium look for your brand.",
    glow: "hover:shadow-[0_0_30px_rgba(255,0,127,0.3)]",
  },
  {
    icon: <Scissors size={32} className="text-neon-orange" />,
    title: "MDF Cutting",
    description: "Intricate laser and router cutting on MDF for decorative panels and custom shapes.",
    glow: "hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]",
  },
  {
    icon: <Megaphone size={32} className="text-neon-cyan" />,
    title: "Branding Solutions",
    description: "End-to-end branding from logo signs to full corporate identity installations.",
    glow: "hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]",
  },
  {
    icon: <Store size={32} className="text-neon-purple" />,
    title: "Commercial Signages",
    description: "Large-scale glowing signages for storefronts ensuring maximum visibility.",
    glow: "hover:shadow-[0_0_30px_rgba(176,38,255,0.3)]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-neon-cyan text-glow">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto mb-6"
          >
            Delivering high-quality, custom-designed physical branding solutions that make you stand out.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-neon-pink font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,127,0.1)]"
          >
            <ShieldCheck size={16} className="text-neon-pink" />
            <span>One Year Guarantee On All Services</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 rounded-2xl transition-all duration-300 ${service.glow} group cursor-pointer border border-white/5`}
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
