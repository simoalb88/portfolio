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
  name: "Simone Alb",
  title: "Product Design Engineering Manager",
  bio: "I'm Simone Alb, a Product Design Engineering Manager at Meta, where I lead a team that turns ambitious design concepts into production interfaces shipped to billions of people. My craft lives at the seam between design and engineering — prototyping, design systems, motion, and the interaction details that make a product feel inevitable.",
  ctas: [
    { label: "View Experience", href: "#experience", variant: "primary" },
    { label: "Get in Touch", href: "#contact", variant: "secondary" },
  ],
};
