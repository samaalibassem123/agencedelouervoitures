export const AnimateShowElement = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};
