import { motion } from "framer-motion";

const RotatingImage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <motion.img
        src="../cover4.png" // Replace with the path to your PNG
        alt="Rotating"
        style={{ width: "2000px", height: "2000px" }} // Adjust size as needed
        animate={{
          rotate: 360, // Rotate 360 degrees
        }}
        transition={{
          duration: 100, // 2 seconds for one full rotation
          repeat: Infinity, // Keep rotating forever
          ease: "linear", // Smooth continuous rotation
        }}
      />
    </div>
  );
};

export default RotatingImage;