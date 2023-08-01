import Image from "next/image.js";
import { Reveal } from "../../utils/Reveal.jsx";

export const AboutCard = ({ image, title, description }) => {
  return (
    <div className="w-60">
      <Reveal>
        <div className="w-60 h-60">
          <Image src={`/images/${image}`} fill alt="img" />
        </div>
      </Reveal>
      <Reveal>
        <div className="text-center my-6 font-bold md:text-4xl">{title}</div>
      </Reveal>
      <Reveal>
        <div className="my-6 text-sm md:text-xl">{description}</div>
      </Reveal>
    </div>
  );
};
