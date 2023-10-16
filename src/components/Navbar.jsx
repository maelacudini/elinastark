import style from "../css/nav.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generals } from "../utils/animations";

export default function Navbar() {
  return (
    <motion.div
      variants={generals}
      initial="initial"
      animate="animate"
      className={style.main}
    >
      <h1>
        <Link to="/">ELINA</Link>
      </h1>
      <div className={style.links}>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
      </div>
    </motion.div>
  );
}
