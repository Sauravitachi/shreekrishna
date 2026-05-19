"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to manufacture a custom neon sign?",
    answer: "Typically, it takes 3-5 business days to manufacture a custom neon sign. Shipping time is additional based on your location. For urgent orders, we do offer expedited production.",
  },
  {
    question: "Are your neon signs safe for indoor use?",
    answer: "Yes! We use LED neon flex, which is entirely safe, energy-efficient, and does not heat up like traditional glass neon. It is shatterproof and safe to touch.",
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes, we provide professional installation services across select cities. For other locations, our signs come with a hassle-free mounting kit and instructions.",
  },
  {
    question: "Can I customize the font and color of my sign?",
    answer: "Absolutely! You can choose from a variety of fonts, colors, and even backing board shapes (cut-to-shape, square, or invisible). Try our Live Neon Customizer to visualize it.",
  },
  {
    question: "Is there a warranty on your products?",
    answer: "Yes, all our LED neon signs and premium acrylic boards come with a standard 1-year warranty covering electrical components.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked <span className="text-neon-purple text-glow">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Got questions? We've got answers.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown
                  className={`text-neon-purple transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
