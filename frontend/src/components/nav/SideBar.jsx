"use client";

import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#home"
        onClick={() => {
          setSelected("home");
        }}
        className={selected === "home" ? styles.selected : ""}
      >
        Main
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#about"
        onClick={() => {
          setSelected("about");
        }}
        className={selected === "about" ? styles.selected : ""}
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#projects"
        onClick={() => setSelected("projects")}
        className={selected === "projects" ? styles.selected : ""}
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#roadmap"
        onClick={() => setSelected("roadmap")}
        className={selected === "roadmap" ? styles.selected : ""}
      >
        Roadmap
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        href="#contact"
        onClick={() => setSelected("contact")}
        className={selected === "contact" ? styles.selected : ""}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
};
