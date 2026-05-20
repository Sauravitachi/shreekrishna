"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative bg-black/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get In <span className="text-neon-purple text-glow">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-10"
            >
              Ready to illuminate your brand? Drop us a message, and our team will get back to you with a customized quote.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { icon: <MapPin className="text-neon-cyan" />, text: "Mohali industrial area phase 9 319 no plot" },
                { icon: <Phone className="text-neon-purple" />, text: "+91 9115729117" },
                { icon: <Mail className="text-neon-pink" />, text: "shreekrishnaadd911@gmail.com" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-10 rounded-2xl neon-border-purple"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-bold mb-8 text-white">Request a Quote</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">Service Required</label>
                <select defaultValue="" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-neon-purple transition-colors appearance-none">
                  <option value="" disabled>Select a Service</option>
                  <option value="neon">Neon Sign Boards</option>
                  <option value="nameplates">Premium Name Plates</option>
                  <option value="acrylic">Acrylic Designs</option>
                  <option value="mdf">MDF Cutting</option>
                  <option value="branding">Complete Branding</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-neon-purple text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_#b026ff] transition-all"
              >
                Send Request <Send size={18} />
              </button>
            </motion.form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
