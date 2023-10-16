import { useEffect, useState } from "react";
import style from "../css/mouse.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";

const images = [
  { url: "./0.webp" },
  { url: "./1.webp" },
  { url: "./2.webp" },
  { url: "./3.webp" },
  { url: "./4.webp" },
  { url: "./5.webp" },
  { url: "./6.webp" },
];

export default function Mouse() {
  let [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  let step = 0;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { stifness: 500, mass: 0.1 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY, movementX, movementY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);

    step += Math.abs(movementX) + Math.abs(movementY);

    if (step >= 300 * currentSlideIndex) {
      setCurrentSlideIndex(currentSlideIndex++ % images.length);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className={style.main}
    >
      <img
        src={images[currentSlideIndex].url}
        alt="image"
        id="image"
        loading="lazy"
      />
    </motion.div>
  );
}
