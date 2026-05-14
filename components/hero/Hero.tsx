import { profile, type Profile } from "@/data/profile";
import styles from "./Hero.module.css";

type HeroProps = {
  data?: Profile;
};

export default function Hero({ data = profile }: HeroProps) {
  return (
    <section
      id="hero"
      className={styles.hero}
      aria-labelledby="hero-name"
    >
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.gradient} />
        <div className={styles.grid} />
        <div className={styles.orbs}>
          <span className={`${styles.orb} ${styles.orb1}`} />
          <span className={`${styles.orb} ${styles.orb2}`} />
          <span className={`${styles.orb} ${styles.orb3}`} />
        </div>
        <div className={styles.noise} />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          Available for new opportunities
        </span>

        <h1 id="hero-name" className={styles.name}>
          {data.name}
        </h1>

        <p className={styles.title}>{data.title}</p>

        <p className={styles.bio}>{data.bio}</p>

        <div className={styles.ctas}>
          {data.ctas.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className={`${styles.cta} ${
                cta.variant === "primary" ? styles.ctaPrimary : styles.ctaSecondary
              }`}
            >
              {cta.label}
              {cta.variant === "primary" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      <a
        href="#experience"
        className={styles.scrollHint}
        aria-label="Scroll to experience section"
      >
        <span>Scroll</span>
        <span className={styles.scrollHintBar} aria-hidden="true" />
      </a>
    </section>
  );
}
