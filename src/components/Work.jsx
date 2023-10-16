import style from "../css/work.module.scss";
import { motion } from "framer-motion";
import { generals } from "../utils/animations";

const images = [
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
      <div className={style.container}>
        {images.map((image, index) => (
          <div key={index} className={style.inner}>
            <p>{image.title}</p>
            <div style={{ overflow: "hidden" }}>
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{
                  scale: 1,
                  transition: { delay: index * 0.3, duration: 0.3 },
                }}
                src={image.url}
                alt="image"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
