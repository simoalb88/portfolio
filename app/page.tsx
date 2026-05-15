import Hero from "@/components/hero/Hero";
import { ExperienceSection } from "@/src/components/sections/ExperienceSection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <main className="flex-1 bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <ExperienceSection />

        <footer
          id="contact"
          className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8 border-t border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Get in touch
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
                Open to conversations about hardware leadership, product design engineering, or new opportunities.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:simo.alb88@gmail.com"
                className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100"
              >
                simo.alb88@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/simone-alb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/simoalb88"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
