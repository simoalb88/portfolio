import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex-1 grid place-items-center px-6 py-24 text-center">
      <div>
        <p className="font-mono text-sm opacity-60 mb-2">404</p>
        <h1 className="text-3xl mb-4">Page not found</h1>
        <Link href="/" className="text-accent underline underline-offset-4">
          Back home
        </Link>
      </div>
    </main>
  );
}
