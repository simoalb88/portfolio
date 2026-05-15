import Hero from "@/components/hero/Hero";
import { ExperienceSection } from "@/src/components/sections/ExperienceSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="flex-1 bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <ExperienceSection />

        <footer
          id="contact"
          className="mx-auto w-full max-w-5xl scroll-mt-24 border-t border-neutral-200 px-6 py-16 sm:px-8 dark:border-neutral-800"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-md">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                02 · Get in touch
              </p>
              <p className="mt-3 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
                Open to conversations about design engineering leadership,
                hardware × software product work, and high-trust collaborations.
              </p>
            </div>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
              <li>
                <a
                  href="mailto:simo.alb88@gmail.com"
                  className="text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100"
                >
                  simo.alb88@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/simone-alb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/simoalb88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <p className="mt-12 text-xs text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} Simone Alb.
          </p>
        </footer>
      </div>
    </>
  );
}
