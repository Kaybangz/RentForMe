import { motion } from "framer-motion";

const transitionAnimation = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const BookmarkAnimation = ({ children }) => {
  return (
    <motion.div
      variants={transitionAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
};

export default BookmarkAnimation;
