import { Reveal } from "../../utils/Reveal.jsx";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect!
            <br />
            You can also find me on{" "}
            <Link
              href="https://www.instagram.com/silversidedish_25/"
              target="_blank"
              rel="nofollow"
            >
              Instagram
            </Link>{" "}
            or{" "}
            <Link
              href="https://twitter.com/Silversidedish_"
              target="_blank"
              rel="nofollow"
            >
              Twitter
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="ecgo0106@naver.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>ecgo0106@naver.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
