import { generals, line } from "../utils/animations";
import style from "../css/loading.module.scss";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div className={style.main}>
      <motion.h1
        variants={generals}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        LOADING
      </motion.h1>
      <motion.div
        variants={line}
        initial="initial"
        animate="animate"
        exit="exit"
        className={style.line}
      ></motion.div>
      <motion.img
        initial={{ width: "100%", height: "100%" }}
        exit={{
          width: "300px",
          height: "300px",
          transition: { duration: 0.5, ease: "easeInOut", delay: 1 },
        }}
        src="./3.webp"
        alt="img"
        loading="lazy"
      />
    </motion.div>
  );
}
