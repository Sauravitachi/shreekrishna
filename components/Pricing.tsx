"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const pricingPlans = [
  {
    name: "Neon Signs",
    price: "₹999",
    description: "Custom LED neon signs for rooms and small shops.",
    features: ["Custom Text & Design", "1 Year Warranty", "Free Adapter & Dimmer", "Easy Wall Mounting"],
    glow: "hover:shadow-[0_0_30px_rgba(255,0,127,0.3)] border-neon-pink/30",
    btnColor: "bg-neon-pink text-white hover:shadow-[0_0_15px_#ec4899]",
    badge: "Most Popular",
  },
  {
    name: "Acrylic Logos",
    price: "₹1499",
    description: "Premium 3D acrylic letters for offices and branding.",
    features: ["3D Raised Letters", "Weatherproof Material", "Backlit & Frontlit Options", "Professional Installation"],
    glow: "hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] border-neon-cyan/30",
    btnColor: "bg-neon-cyan text-black hover:shadow-[0_0_15px_#00e5ff]",
  },
  {
    name: "MDF Cutting",
    price: "₹299",
    suffix: "/sq ft",
    description: "Intricate laser and CNC cutting for decor.",
    features: ["Custom Patterns", "High Precision Cutting", "Various Thicknesses", "Ready to Paint"],
    glow: "hover:shadow-[0_0_30px_rgba(176,38,255,0.3)] border-neon-purple/30",
    btnColor: "bg-neon-purple text-white hover:shadow-[0_0_15px_#8b5cf6]",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Transparent <span className="text-neon-pink text-glow">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Premium quality at affordable rates. Get a quick estimate for our most popular services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card relative p-8 rounded-2xl transition-all duration-300 group border flex flex-col h-full ${plan.glow}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-pink text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-sm text-gray-400">Starting from</span>
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.suffix && <span className="text-gray-400">{plan.suffix}</span>}
              </div>

              <div className="space-y-4 flex-grow mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`w-full py-3 rounded-full font-bold text-center transition-all mt-auto ${plan.btnColor}`}
              >
                Get Custom Quote
              </a>
              <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                <Info size={12} /> Final price depends on design & size
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
