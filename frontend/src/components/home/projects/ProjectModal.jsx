import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiOpensea } from "react-icons/si";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { StandardButton } from "@/components/buttons/StandardButton";

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
      document.querySelector("header").style.visibility = "hidden";
      document.querySelector("nav").style.visibility = "hidden";
    } else {
      body.style.overflowY = "scroll";
      document.querySelector("header").style.visibility = "visible";
      document.querySelector("nav").style.visibility = "visible";
    }
  }, [isOpen]);

  if (!isOpen) return <></>;

  return (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <img
          className={styles.modalImage}
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className={styles.modalContent}>
          <div className="flex justify-between">
            <h4 className="mt-10">{title}</h4>
            <Link href={"/mint"}>
              <button className="bg-main rounded-2xl text-black p-3 mt-12">
                Mint
              </button>
            </Link>
          </div>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>
          <div className={styles.suppliedContent}>{modalContent}</div>
          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Click to get more information<span>.</span>
            </p>
            <div className={styles.links}>
              <Link target="_blank" rel="nofollow" href={code}>
                <SiOpensea /> NFT marketplace
              </Link>
              <Link target="_blank" rel="nofollow" href={projectLink}>
                <AiOutlineExport /> official website
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
