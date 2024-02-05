import style from "../css/work.module.scss";
import { motion } from "framer-motion";
import { generals } from "../utils/animations";
import Swpr from "./Swpr";

export const images = [
  { url: "./0.webp", title: "Ephemeral Dreams" },
  { url: "./1.webp", title: "Midnight Serenade" },
  { url: "./2.webp", title: "Azure Whispers" },
  { url: "./3.webp", title: "Chromatic Kaleidoscope" },
  { url: "./4.webp", title: "Silent Reverie" },
  { url: "./5.webp", title: "Surreal Odyssey" },
];

export default function Work() {
  return (
    <motion.div
      variants={generals}
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.main}
    >
      <Swpr images={images} />
    </motion.div>
  );
}
