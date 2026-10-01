import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      
      <section className="home-hero">
        <div className="home-copy">
          <h1>Hi, I&apos;m Von!</h1>
          <h4>Second-Year BSIT Student</h4>
          <Link href="/about" className="about-button">
            About Me
          </Link>

          <div className="socials">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=livinqmatthew%40gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail: livinqmatthew@gmail.com">
              <span className="social-icon" aria-hidden="true">✉</span>
              <span>livinqmatthew@gmail.com</span>
            </a>
            <a href="https://www.facebook.com/heinrich.von.arsenia.2024" target="_blank" rel="noreferrer" aria-label="Facebook: Heinrich Von Arsenia">
              <span className="social-icon" aria-hidden="true">f</span>
              <span>Heinrich Von Arsenia</span>
            </a>
            <a href="https://www.instagram.com/heinrich.vonnn/" target="_blank" rel="noreferrer" aria-label="Instagram: heinrich.vonnn">
              <span className="social-icon" aria-hidden="true">◎</span>
              <span>heinrich.vonnn</span>
            </a>
          </div>
        </div>
        <Image
          src="/GradPic.jpg"
          alt="Temporary profile photo"
          width={320}
          height={320}
          className="home-photo"
        />
      </section>
    </main>
  );
}