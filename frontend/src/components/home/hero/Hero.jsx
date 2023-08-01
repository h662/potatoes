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
            WE R <span className="text-main">MASS</span>hed POTATOES
            <span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            차별화된 소통방식을 통해 건강한 팬 커뮤니티 형성에 앞장서 나갑니다.
            <div>
              <span>Web3를 사용한 팬덤 문화는 어떤 모습일까요?</span>
            </div>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            스타는 팬 없이 존재할 수 없고, 팬은 건강한 팬덤 문화가 없다면
            지속하기 어렵습니다.
            <span className="text-main font-bold">'Massed Potatoes'</span>는
            블록체인 기술을 활용하여 팬들이 주도하는 팬 커뮤니티 문화 형성을
            도와줍니다. 또한, 자신의 팬심을 증명하는 수단과 홀더간의 소속감과
            결속력 향상을 위한 다양한 서비스를 제공합니다.
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
