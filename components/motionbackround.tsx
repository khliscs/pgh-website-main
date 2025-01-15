import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const backgroundAnimation = {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 1, scale: 1.2 },
    exit: { opacity: 0, scale: 1 },
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse" },
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #ff7eb3, #ff758c, #fad0c4)",
        zIndex: -1,
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={backgroundAnimation.transition}
    />
  );
};

export default AnimatedBackground;