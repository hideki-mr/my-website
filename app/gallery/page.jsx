import Image from "next/image";
import ScrollRevealObserver from "../components/ScrollRevealObserver";

export default function Gallery() {
  return (
    <main>
      <ScrollRevealObserver />
      <h1>Gallery</h1>
      <p>Welcome to my gallery.</p>
      <Image
        src="/bsitpic.jpg"
        alt="BSIT photo"
        width={420}
        height={260}
        className="hobby-image gallery-image scroll-reveal"
      />
      <Image
        src="/androidstudio.jpg"
        alt="Android Studio"
        width={420}
        height={260}
        className="hobby-image gallery-image scroll-reveal"
      />
      <Image
        src="/oppa.jpg"
        alt="Oppa photo"
        width={420}
        height={260}
        className="hobby-image gallery-image scroll-reveal"
      />
      <Image
        src="/itlab.jpg"
        alt="IT lab photo"
        width={420}
        height={260}
        className="hobby-image gallery-image scroll-reveal"
      />
    </main>
  );
}