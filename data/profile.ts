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
  bio: "I'm Simone Alb, a Product Design Engineering Manager at Meta Reality Labs building the next generation of AI Glasses. My work spans the full arc from concept to mass production — mechanical design, DFM, supplier development, and the cross-functional leadership that turns ambitious hardware programs into real consumer products.",
  ctas: [
    { label: "View Experience", href: "#experience", variant: "primary" },
    { label: "Get in Touch", href: "mailto:simo.alb88@gmail.com", variant: "secondary" },
  ],
};
