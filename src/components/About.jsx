import { useState } from "react";
import style from "../css/about.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { aboutmore, generals } from "../utils/animations";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={generals}
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.main}
    >
      <p className={style.text}>
        Elina Stark Studio is your partner in building, rejuvenating, or
        expanding your brand. We understand that a brand is more than just a
        logo; it's an identity, a promise, and an experience. Our team of
        talented designers works closely with you to craft a brand that tells
        your story, connects with your target audience, and sets you apart in a
        competitive market.
      </p>

      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="button"
      >
        Read more
      </button>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            variants={aboutmore}
            initial="initial"
            animate="animate"
            exit="exit"
            className={style.offcanvas}
          >
            <div className={style.social}>
              <h2 className={style.title}>Contact us</h2>
              <a className={style.link} href="">
                sendusamail@gail.com
              </a>
              <a className={style.link} href="">
                Instagram
              </a>
              <a className={style.link} href="">
                LinkedIn
              </a>
              <a className={style.link} href="">
                Twitter
              </a>
            </div>

            <div>
              <p className={style.text}>
                Publications have the power to inform, inspire, and entertain.
                We specialize in the art of publication design, turning your
                content into beautifully designed, cohesive, and engaging
                pieces. Whether it's a magazine, book, annual report, or any
                other publication, we ensure that your message is not only read
                but cherished.
              </p>

              <p className={style.text}>
                Whether you're a startup looking to establish your brand
                identity or an established entity aiming to breathe new life
                into your marketing materials, Elina Stark Studio is here to
                take your design dreams and turn them into reality. We invite
                you to explore our portfolio and get in touch to start a
                conversation about your project. Let's embark on a creative
                journey together!
              </p>

              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className="button"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
