"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all hover:scale-110"
    >
      <MessageCircle size={28} />
      {/* Tooltip */}
      <span className="absolute -top-10 right-0 w-max px-3 py-1 bg-black/80 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </motion.a>
  );
}
