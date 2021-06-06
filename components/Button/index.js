import { motion } from "framer-motion";
import { buttonVariants } from "./animation";

const Button = ({ children, onClick }) => {
  return (
    <motion.button
      className="focus:outline-none px-6 py-3 my-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded text-white text-xs uppercase tracking-widest"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
