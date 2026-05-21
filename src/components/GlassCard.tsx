import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function GlassCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-3xl p-6 md:p-8 transition-all duration-500 hover:shadow-[var(--glass-shadow-lg)] hover:-translate-y-1 ${className}`}
    >
      {children}
    </motion.div>
  );
}
