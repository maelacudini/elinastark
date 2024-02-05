import style from "../css/hero.module.scss";
import Mouse from "./Mouse";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { generals } from "../utils/animations";
import Cursor from "./Cursor";

export default function Hero() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setShowCursor(false);
      } else {
        setShowCursor(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.main}>
      {showCursor && <Mouse />}
      <img
        className={style.image}
        src="./3.webp"
        alt="image"
        width={"300px"}
        height={"300px"}
        loading="lazy"
      />
      <motion.p variants={generals} initial="initial" animate="animate">
        A creative approach to photography and branding
      </motion.p>
    </div>
  );
}
