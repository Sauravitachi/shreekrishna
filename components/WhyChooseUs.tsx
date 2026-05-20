"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, PenTool, IndianRupee, Users, Award } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck size={28} className="text-neon-cyan" />,
    title: "Premium Quality",
    description: "We use only the highest grade materials for durability and a flawless finish.",
  },
  {
    icon: <Clock size={28} className="text-neon-purple" />,
    title: "Fast Delivery",
    description: "Time is money. We ensure quick turnaround times without compromising on quality.",
  },
  {
    icon: <PenTool size={28} className="text-neon-pink" />,
    title: "Custom Designs",
    description: "Every brand is unique. We tailor our designs to perfectly match your vision.",
  },
  {
    icon: <IndianRupee size={28} className="text-neon-orange" />,
    title: "Affordable Pricing",
    description: "Premium aesthetics at competitive prices, offering the best value for your investment.",
  },
  {
    icon: <Users size={28} className="text-neon-cyan" />,
    title: "Expert Team",
    description: "Years of experience in crafting, cutting, and installing high-end signages.",
  },
  {
    icon: <Award size={28} className="text-neon-pink" />,
    title: "1-Year Guarantee",
    description: "We stand by our craftsmanship, offering a full one-year guarantee on all our services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white/5 relative border-y border-white/5">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Why <br />
              <span className="text-neon-purple text-glow">Choose Us</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-8"
            >
              At ShreeKrishna, we blend creativity with craftsmanship to deliver branding solutions that leave a lasting impression.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="#contact"
              className="inline-flex px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
            >
              Discuss Your Project
            </motion.a>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-black/50 border border-white/10">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{reason.title}</h4>
                    <p className="text-sm text-gray-400">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
