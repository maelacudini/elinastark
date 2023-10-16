import style from "../css/work.module.scss";
import { motion } from "framer-motion";

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
    <div className={style.main}>
      <div className={style.container}>
        {images.map((image, index) => (
          <div key={index} className={style.inner}>
            <p>{image.title}</p>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.3, duration: 0.3 },
              }}
              src={image.url}
              alt="image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
