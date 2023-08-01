import { SectionHeader } from "../../utils/SectionHeader";
import { AboutCard } from "./AboutCard.jsx";

const aboutCards = [
  {
    image: "",
    title: "대중성",
    description: "소셜 로그인을 통해 블록체인이 처음인 팬도 쉽게 사용 가능",
  },
  {
    image: "",
    title: "확장성",
    description:
      "살아있는 유기체처럼 계속해서 확장 및 변화를 시도하는 팬 커뮤니티",
  },
  {
    image: "",
    title: "Technology",
    description: "인공지능(AI), VR 등 딥 테크 기술을 활용",
  },
  {
    image: "",
    title: "IP",
    description: "아이돌 굿즈부터 캐릭터 상품까지 IP를 활용한 다양한 서비스",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 justify-items-center">
        {aboutCards.map((v, i) => {
          return (
            <AboutCard
              key={i}
              image={v.image}
              title={v.title}
              description={v.description}
            />
          );
        })}
      </div>
    </section>
  );
};
