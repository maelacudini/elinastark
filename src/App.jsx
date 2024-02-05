import "./global.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {loading && <Loading key="loading" />}
      </AnimatePresence> */}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <Navbar />
    </main>
  );
}
