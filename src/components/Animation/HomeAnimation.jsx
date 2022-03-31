import { motion } from "framer-motion";

const transitionAnimation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  transition: { duration: 3 },
};

const HomeAnimation = ({ children }) => {
  return (
    <motion.div
      variants={transitionAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};

export default HomeAnimation;
