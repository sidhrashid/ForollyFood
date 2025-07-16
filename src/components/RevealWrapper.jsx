import { motion } from "framer-motion";
import { getVariants } from "../utils/animateDirection";

const RevealWrapper = ({
  children,
  direction = "up",
  delay = 0.2,
  className = "",
  triggerOnLoad = false, // 👈 new prop added
}) => {
  const variants = getVariants(direction, delay);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={triggerOnLoad ? "visible" : undefined}       // 👈 on-load animation
      whileInView={!triggerOnLoad ? "visible" : undefined}  // 👈 scroll animation
      viewport={!triggerOnLoad ? { once: false, amount: 0.3 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;
