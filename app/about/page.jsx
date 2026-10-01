import Image from "next/image";
import ScrollRevealObserver from "../components/ScrollRevealObserver";

export default function About() {
  return (
    <main>
      <ScrollRevealObserver />
      <Image
        src="/GradPic.jpg"
        alt="Graduate profile portrait"
        width={320}
        height={320}
        priority
        className="about-profile-photo"
      />
      <h1>About Me</h1>
      <h2>Heinrich Von C. Arsenia</h2>
      <p>I&apos;m a second-year BSIT college student at Holy Cross of Davao College</p>

      <p>I&apos;m a 2006 baby, 178cm tall and weigh 75kg.</p>
      <h2>Hobbies</h2>
      <p className="scroll-reveal">I enjoy playing video games, especially story mode and multiplayer.</p>
      <Image
        src="/MyGame.png"
        alt="My game image"
        width={420}
        height={260}
        className="hobby-image scroll-reveal"
      />
      <p className="hobby-caption scroll-reveal">My favorite TV show is Breaking Bad!</p>
      <Image
        src="/BreakingBad.jpg"
        alt="Breaking Bad image"
        width={420}
        height={260}
        className="hobby-image second-hobby-image scroll-reveal"
      />
      <p className="hobby-caption scroll-reveal">I also watch anime, and my favorite genre is romance.</p>
      <Image
        src="/Horimiya.jpg"
        alt="Horimiya image"
        width={420}
        height={260}
        className="hobby-image third-hobby-image scroll-reveal"
      />
    </main>
  );
}
