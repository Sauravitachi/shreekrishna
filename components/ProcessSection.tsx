"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Factory, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare size={24} className="text-white" />,
    title: "1. Consultation",
    description: "We discuss your requirements, space, and vision to understand exactly what you need.",
    color: "from-neon-cyan to-blue-500",
  },
  {
    icon: <PenTool size={24} className="text-white" />,
    title: "2. Design",
    description: "Our experts create digital mockups and refine the design until it matches your brand identity perfectly.",
    color: "from-neon-purple to-purple-600",
  },
  {
    icon: <Factory size={24} className="text-white" />,
    title: "3. Production",
    description: "Using premium materials and advanced machinery, we bring your design to life in our workshop.",
    color: "from-neon-pink to-pink-600",
  },
  {
    icon: <Rocket size={24} className="text-white" />,
    title: "4. Installation",
    description: "Our skilled team securely installs the final product at your location for maximum impact.",
    color: "from-neon-orange to-orange-500",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative bg-black/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            How We <span className="text-neon-orange text-glow">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A seamless, transparent process from your first call to the final installation.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-orange opacity-20 -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Indicator */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 z-10 group-hover:scale-110 transition-transform duration-300 relative`}>
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-md" />
                  <span className="relative z-10">{step.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[250px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
