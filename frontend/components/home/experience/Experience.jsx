import { SectionHeader } from "../../utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="roadmap">
      <SectionHeader title="Roadmap" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Step 1",
    position: "감자빵 만들기",
    time: "2020 - 2022",
    location: "Chuncheon",
    description:
      "저렴한 외국산 감자를 수입하지 않고, 계약재배를 통해 국내산 감자만 사용합니다.",
    tech: ["감자빵", "치즈 감자빵", "토마토바질 감자빵", "마늘 감자빵"],
  },
  {
    title: "Step 2",
    position: "감자빵 홍보하기",
    time: "2022 - 2023",
    location: "Chuncheon",
    description:
      "밀가루를 사용하지 않고, 타피오카 전분과 쌀가루를 이용하여 겉피가 더욱 쫀득합니다.",
    tech: ["참깨 감자빵", "카레 감자빵", "올리브 감자빵", "불닭 감자빵"],
  },
  {
    title: "Step 3",
    position: "감자빵 판매하기",
    time: "2023 - Present",
    location: "Chuncheon",
    description:
      "저렴한 감자파우더 대비, 맛과 영양적인 부분에서 감자 본연의 맛을 최대한 구현하기 위해 다품종의 국산 감자를 사용합니다.",
    tech: ["씨앗 감자빵", "고르곤졸라 감자빵", "초당 옥수수빵"],
  },
];
