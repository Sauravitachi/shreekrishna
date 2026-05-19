"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Cafe Owner",
    content: "ShreeKrishna delivered an incredible neon sign for my cafe. It literally lights up the entire street and attracts so many customers!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Interior Designer",
    content: "The premium name plates and acrylic work are top-notch. I highly recommend them for any custom design requirements.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Corporate Manager",
    content: "We hired them for full office branding including MDF cut partitions and large outdoor signs. Flawless execution and on-time delivery.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Client <span className="text-neon-cyan text-glow">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl relative group"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 group-hover:text-neon-cyan/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} size={18} className="fill-neon-cyan text-neon-cyan" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-8 relative z-10">"{t.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold text-white shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-neon-cyan">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
