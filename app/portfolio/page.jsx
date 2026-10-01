import Image from "next/image";
import ScrollRevealObserver from "../components/ScrollRevealObserver";

export default function Portfolio() {
  return (
    <main>
      <ScrollRevealObserver />
      <h1>Portfolio</h1>
      <p>Welcome to my portfolio.</p>
      <section className="portfolio-project">
        <h2>E-commerce Website - Figma Design</h2>
        <Image
          src="/EcommerceFigma.png"
          alt="E-commerce website mockup designed in Figma"
          width={1277}
          height={831}
          className="portfolio-image scroll-reveal"
        />
        <h2>Mockup - Figma Design</h2>
        <Image
          src="/MochUp.png"
          alt="E-commerce website mockup"
          width={1331}
          height={467}
          className="portfolio-image scroll-reveal"
        />
        <h2>UserBehavior - Figma Design</h2>
        <Image
          src="/UserBehavior.png"
          alt="User behavior analysis mockup"
          width={1331}
          height={467}
          className="portfolio-image scroll-reveal"
        />
      </section>
    </main>
  );
}