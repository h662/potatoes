import styles from "./mint.module.scss";
import { Reveal } from "../../components/utils/Reveal.jsx";

export default function Mint() {
  return (
    <div className="min-h-screen">
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            WE R MASShed POTATOES<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            국내를 넘어 세계로 나아갈 수 있는 농업회사를 지향합니다.
            <div>
              <span>미래의 농업 생태계는 어떤모습일까요?</span>
            </div>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            잊기 쉬운 일상의 소중함을 일깨울 수 있는 공간과, 밭에서 자라는
            신선한 농산물을 활용하여 부가가치를 더한 상품을 개발해 새로운 소비를
            창출하고, 제철에 따라 농장에서 신선한 재료들로 디저트와 음료를
            만들어 제공합니다. 또한, 각기 다른 품종의 다양성의 가치를 담은
            콘텐츠를 경험할 수 있도록 제안합니다.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
