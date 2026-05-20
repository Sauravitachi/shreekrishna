"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Type, Palette, Type as TypeIcon } from "lucide-react";

const colors = [
  { name: "Pink", value: "#ec4899", shadow: "rgba(236,72,153,0.8)" },
  { name: "Blue", value: "#3b82f6", shadow: "rgba(59,130,246,0.8)" },
  { name: "Cyan", value: "#00e5ff", shadow: "rgba(0,229,255,0.8)" },
  { name: "Purple", value: "#a855f7", shadow: "rgba(168,85,247,0.8)" },
  { name: "Green", value: "#22c55e", shadow: "rgba(34,197,94,0.8)" },
  { name: "Yellow", value: "#eab308", shadow: "rgba(234,179,8,0.8)" },
  { name: "White", value: "#ffffff", shadow: "rgba(255,255,255,0.8)" },
];

const fonts = [
  { name: "Pacifico", css: "'Pacifico', cursive" },
  { name: "Dancing", css: "'Dancing Script', cursive" },
  { name: "Marker", css: "'Permanent Marker', cursive" },
  { name: "Inter", css: "var(--font-sans)" },
  { name: "Allura", css: "'Allura', cursive" },
  { name: "Funky", css: "'Allura', cursive" },
];

export default function NeonCustomizer() {
  const [text, setText] = useState("Good Vibes");
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeFont, setActiveFont] = useState(fonts[0]);

  const addFunkySignature = () => {
    const sig = " — Funky ✨";
    setText((prev) => (prev.includes(sig) ? prev : prev + sig));
    const funkyFont = fonts.find((f) => f.name === "Funky") || fonts[0];
    setActiveFont(funkyFont);
    setActiveColor(colors[0]);
  };

  return (
    <section id="customizer" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Live <span className="text-neon-cyan text-glow">Neon Customizer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Design your own neon sign instantly. Type your text, pick a color, and see the magic.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start max-w-6xl mx-auto">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 space-y-8 glass-card p-8 rounded-3xl"
          >
            {/* Text Input */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3 uppercase tracking-wider">
                <Type size={16} /> Enter Text
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={20}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors"
                placeholder="Type here..."
              />
              <div className="mt-3">
                <button
                  type="button"
                  onClick={addFunkySignature}
                  className="py-2 px-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition"
                >
                  Add Funky Signature
                </button>
              </div>
            </div>

            {/* Color Picker */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3 uppercase tracking-wider">
                <Palette size={16} /> Choose Color
              </label>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColor(color)}
                    className={`w-10 h-10 rounded-full transition-all duration-300 border-2 ${
                      activeColor.name === color.name ? "border-white scale-110" : "border-transparent hover:scale-105"
                    }`}
                    style={{
                      backgroundColor: color.value,
                      boxShadow: activeColor.name === color.name ? `0 0 15px ${color.shadow}` : "none",
                    }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Font Picker */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3 uppercase tracking-wider">
                <TypeIcon size={16} /> Choose Font
              </label>
              <div className="grid grid-cols-2 gap-3">
                {fonts.map((font) => (
                  <button
                    key={font.name}
                    onClick={() => setActiveFont(font)}
                    className={`py-3 px-4 rounded-xl text-sm transition-all border ${
                      activeFont.name === font.name
                        ? "bg-white/10 border-white/30 text-white"
                        : "bg-black/30 border-white/5 text-gray-400 hover:bg-white/5"
                    }`}
                    style={{ fontFamily: font.css }}
                  >
                    {font.name}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors mt-4">
              Request Quote for this Design
            </button>
          </motion.div>

          {/* Preview Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 h-[400px] lg:h-[600px] relative rounded-3xl overflow-hidden border border-white/10 group"
          >
            {/* Background Image (Brick Wall or Dark texture) */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity group-hover:opacity-60"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1000')",
                filter: "grayscale(100%) brightness(0.3)",
              }}
            />
            
            <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden">
              <div
                className="text-center break-words max-w-full leading-tight"
                style={{
                  fontFamily: activeFont.css,
                  color: "#fff",
                  textShadow: `
                    0 0 5px #fff,
                    0 0 10px #fff,
                    0 0 20px ${activeColor.value},
                    0 0 40px ${activeColor.value},
                    0 0 80px ${activeColor.value},
                    0 0 90px ${activeColor.value},
                    0 0 100px ${activeColor.value},
                    0 0 150px ${activeColor.value}
                  `,
                  fontSize: text.length > 10 ? "clamp(3rem, 8vw, 6rem)" : "clamp(4rem, 10vw, 8rem)",
                  transition: "all 0.3s ease",
                }}
              >
                {text || "Your Text"}
              </div>
            </div>
            
            {/* Floor reflection effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent blur-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
