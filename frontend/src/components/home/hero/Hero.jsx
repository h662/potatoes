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
            , 밭에서 자라는 신선한 농산물을 활용하여 부가가치를 더한 상품을
            개발해 새로운 소비를 창출하고, 제철에 따라 농장에서 신선한 재료들로
            디저트와 음료를 만들어 제공합니다. 또한, 각기 다른 품종의 다양성의
            가치를 담은 콘텐츠를 경험할 수 있도록 제안합니다.
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
