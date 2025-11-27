import { Variants } from "framer-motion";

// Container với stagger children
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Fade + Slide up
export const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Fade + Slide down
export const fadeInDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Fade + Scale
export const fadeInScaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Slide from Left
export const slideInLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Slide from Right
export const slideInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};