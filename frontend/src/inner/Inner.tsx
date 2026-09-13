import { motion, type Variants } from "framer-motion";
import "./styles.scss";

export default function Inner({ children }: { children: React.ReactNode }) {
  const container: Variants = {
    initial: {},
    enter: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const text: Variants = {
    initial: {
      y: "100%",
      opacity: 0,
    },

    enter: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },

    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      className="inner"
      variants={container}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div variants={text}>
        {children}
      </motion.div>
    </motion.div>
  );
}