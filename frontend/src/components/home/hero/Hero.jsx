import Link from "next/link";
import { StandardButton } from "../../buttons/StandardButton";
import { Reveal } from "../../utils/Reveal.jsx";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section id="home" className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            WE R <span className="text-main">&</span>Ticket
            <span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            나의 팬 활동을 기록하고 증명하고 싶은 니즈를
            <div>
              <span>번거롭지 않은 방식을 통해</span>
            </div>
            NFT소유로 경험할 수 있도록 하는 플랫폼입니다.
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            누구나 한 번쯤은 들어봤고, 궁금은 하지만
            <br />
            가장 큰 문제였던
            <span className="text-main font-bold"> ‘번거로운 접근’</span>
            이라는 문제점을 개선하였습니다.
            <br />
            더 이상 소수의 필요성에 의해서 움직이는 블록체인이 아닌
            <br />
            <span className="text-main font-bold">‘덕후’</span>들에게 필수재로서
            가치를 담은 콘텐츠를 제안합니다.
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
