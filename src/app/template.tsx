"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
transition={{ duration: 0.5, ease: [0.32, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
