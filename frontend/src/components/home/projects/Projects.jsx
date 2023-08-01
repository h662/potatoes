import { SectionHeader } from "../../utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "The Blue Bottle",
    imgSrc: "/images/project-1.png",
    code: "https://www.github.com",
    projectLink: "https://www.bluebottlecoffeekorea.com",
    tech: ["Membership", "Coffee", "Brand", "Loyalty"],
    description:
      "Blue Bottle presents an innovative approach to our renowned customer loyalty program with the exclusive Blue Bottle NFTs.",
    modalContent: (
      <>
        <p>
          Blue Bottle presents an innovative approach to our renowned customer
          loyalty program with the exclusive Blue Bottle NFTs.
        </p>
        <p>
          Embracing the blockchain revolution, w&apos;re introducing 2000
          identical, limited edition NFTs representing a unique blend of digital
          ownership and real-world privileges.
        </p>
        <p>
          This one-of-a-kind digital asset serves as a passport to an elite Blue
          Bottle experience, pairing the innovation of NFTs with our dedication
          to creating meaningful moments of connection between our customers and
          their coffee.
        </p>
      </>
    ),
  },
  {
    title: "Project KDA",
    imgSrc: "/images/project-2.jpeg",
    code: "https://www.github.com",
    projectLink: "https://universe.leagueoflegends.com/ko_KR/kda/",
    tech: ["Idol", "Gameing", "Metaverse"],
    description:
      "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    modalContent: (
      <>
        <p>
          K/DA is gaining explosive love with their hit song
          &apos;POP/STARS&apos;. From the trademark tail that even deceives fans
          to the fantastic atmosphere of the studio, fans are going crazy for
          K/DA&apos;s unconventional sense. Like Ari said, &quot;I always want
          to convey the message to be true to myself,&quot; K/DA intends to
          showcase their music to the world through a world tour.
        </p>
        <p>
          Meet K/DA&apos;s new music as soon as possible! Own a groundbreaking
          nft with K/DA&apos;s music. Use nft as a profile on multiple platforms
          and become a &quot;popstar&quot; anywhere.
        </p>
        <p>
          Through nft, you will be able to exercise your rights to purchase
          related goods or online concert tickets. Prove your love for K/DA by
          creating fan art with nft.
        </p>
        <p>
          We are preparing to reward fans for their interest, such as a random
          rarity skin airdrop event.
          {":)"}
        </p>
      </>
    ),
  },
  {
    title: "KIA TIGERS",
    imgSrc: "/images/kia_emblem.jpg",
    code: "https://www.github.com",
    projectLink: "https://tigers.co.kr/",
    tech: ["Baseball", "2023", "Ticket", "Membership"],
    description:
      "Please watch the powerful flight of the tigers in the 2023 season. We ask for the fans' unchanging love and encouragement. KIA Tigers will always be by your side.",
    modalContent: (
      <>
        <p>
          Thanks to the unwavering faith and support of the fans, the KIA Tigers
          were able to stand tall as the most prestigious team in Korean
          professional baseball.
        </p>
        <p>
          It is a flow-based nft that allows you to purchase, collect, and trade
          nft cards that contain the moments of KIA Tigers scoring. Cards are
          divided into 4 grades, and 2 or more cards are sold as a randomly
          bundled pack. This pack has different purchasing conditions depending
          on the rarity.
        </p>
        <p>
          A higher rarity card that matches a player&apos;s back number will
          have a higher price. Additional cards are given through challenges or
          quests, or events related to baseball game tickets are being prepared.
        </p>
        <p>
          KIA Tigers declared &apos;a club with fans&apos; with its foundation
          in 2001. KIA Tigers is making constant efforts to grow into a club
          that knows exactly what fans really want. In addition, the team is
          doing their best every game for the fans, and the front desk will do
          its best to serve the fans.
        </p>
      </>
    ),
  },
  {
    title: "It-subscriber",
    imgSrc: "/images/itsub.jpeg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/channel/UCdUcjkyZtf-1WJyPPiETF1gQ",
    tech: ["subscriber", "Tech", "fandom", "community"],
    description:
      "We are subscribers of ITSub, a tech creator who can't stand to be curious. Become an It-Subscriber by verifying your subscribers and taking the ITSub Quiz!",
    modalContent: (
      <>
        <p>
          Do you use a Samsung cell phone or an iPhone? What laptop do you use?
          What graphics card are you using? Have fun communicating with people
          who have a common interest in &apos;tech&apos;.
        </p>
        <p>
          Follow Itseop&apos;s &apos;O-Man-Sang-Sa&apos; and show off what you
          bought. Are you a true Black Cow? Share how you use Black Cow goods in
          your daily life.
        </p>
        <p>
          What more activities could you do? Communicate freely and plan events.
        </p>
      </>
    ),
  },
];
