"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className="fixed inset-0" // ← QUAN TRỌNG: che toàn màn hình
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.42,
          ease: [0.32, 0, 0.2, 1],
        }}
      >
        {/* Overlay nhẹ để che flash (tùy chọn nhưng cực mượt) */}
        <div className="absolute inset-0 bg-black" />

        {/* Content thật */}
        <div className="relative">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}