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
    position: "쉬운 접근",
    time: "2023 - 2024",
    location: "Seoul",
    description: "소셜 로그인을 통한  간편 로그인 & 홀더인증",
    tech: [""],
  },
  {
    title: "Step 2",
    position: "팬심 증명",
    time: "2024 - 2025",
    location: "Seoul",
    description: "나의 활동 누적기록, 홀더 전용 구역 확보, 지정구역 자리배치",
    tech: [""],
  },
  {
    title: "Step 3",
    position: "팬심 확장",
    time: "2025 - 2026",
    location: "Seoul",
    description: "티켓 내부거래, 지인 동반 초대, 지갑 가입 유도",
    tech: [""],
  },
];
