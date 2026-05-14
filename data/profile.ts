export type ProfileCTA = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export type Profile = {
  name: string;
  title: string;
  bio: string;
  ctas: ProfileCTA[];
};

export const profile: Profile = {
  name: "Your Name",
  title: "Senior Software Engineer",
  bio: "Builder of resilient systems and delightful interfaces. I help teams ship product faster without losing the plot.",
  ctas: [
    { label: "View Experience", href: "#experience", variant: "primary" },
    { label: "Get in Touch", href: "#contact", variant: "secondary" },
  ],
};
