"use client"

import styles from "./mint.module.scss";
import { Reveal } from "../../components/utils/Reveal.jsx";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Mint() {
  const router = useRouter();
  return (
    <>
      <button
        className="fixed top-8 md:top-32 left-16 md:left-64 text-6xl"
        onClick={() => router.push("/#home")}
      >
        <IoArrowBackOutline />
      </button>
      <div className="min-h-screen flex justify-center mt-20">
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              MINT IS LIVE<span>!</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              <div>
                <span>JOIN OUR COMMUNITY</span>
              </div>
            </h2>
          </Reveal>
        </div>
      </div>
    </>
  );
}
