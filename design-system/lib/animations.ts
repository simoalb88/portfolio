import type { Variants, Transition } from "framer-motion";

/* =============================================================
   Motion tokens — single source of truth for Framer Motion.
   Mirrors --duration-* / --ease-* in globals.css so CSS and JS
   animations feel like the same system.
   ============================================================= */

export const duration = {
  instant: 0.08,
  fast:    0.16,
  base:    0.24,
  slow:    0.40,
  slower:  0.64,
} as const;

export const easing = {
  linear: [0, 0, 1, 1],
  out:    [0.16, 1, 0.3, 1],     // confident expo-out
  in:     [0.7, 0, 0.84, 0],
  inOut:  [0.83, 0, 0.17, 1],
  spring: [0.34, 1.56, 0.64, 1], // gentle overshoot
} as const;

export const springs = {
  soft:    { type: "spring" as const, stiffness: 220, damping: 26, mass: 0.9 },
  snappy:  { type: "spring" as const, stiffness: 380, damping: 30, mass: 0.8 },
  bouncy:  { type: "spring" as const, stiffness: 260, damping: 14, mass: 0.9 },
} as const;

const baseTransition: Transition = {
  duration: duration.base,
  ease: easing.out,
};

/* =============================================================
   Variants — drop into <motion.div variants={...}> and animate.
   All variants support a `custom` index for staggering manually.
   ============================================================= */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: baseTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { ...springs.soft } },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 8 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: duration.slow, ease: easing.out },
  },
};

/* =============================================================
   Stagger containers — wrap a list, children inherit timing.
   Use with the variant above on each child:
     <motion.ul variants={staggerContainer()} initial="hidden" animate="visible">
       <motion.li variants={fadeInUp}>...</motion.li>
     </motion.ul>
   ============================================================= */

export function staggerContainer(opts?: {
  stagger?: number;        // delay between children
  delayChildren?: number;  // initial delay before first child
}): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: opts?.stagger ?? 0.06,
        delayChildren: opts?.delayChildren ?? 0,
      },
    },
  };
}

/* =============================================================
   Viewport-triggered reveal — use with whileInView.
     <motion.section
       initial="hidden"
       whileInView="visible"
       viewport={revealViewport}
       variants={fadeInUp}
     />
   ============================================================= */

export const revealViewport = {
  once: true,
  margin: "0px 0px -10% 0px",
  amount: 0.2,
} as const;

/* =============================================================
   Interactive presets — hover/tap micro-interactions.
   ============================================================= */

export const hoverLift = {
  whileHover: { y: -2, transition: { duration: duration.fast, ease: easing.out } },
  whileTap: { y: 0, scale: 0.98, transition: { duration: duration.instant } },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 0 1px rgba(139,92,246,0.4), 0 0 32px -8px rgba(139,92,246,0.5)",
    transition: { duration: duration.base, ease: easing.out },
  },
};

/* =============================================================
   Reduced-motion helper — call inside a component to gate animations.
   Returns a variants object with transitions stripped to instant.
   ============================================================= */

export function withReducedMotion(prefers: boolean, variants: Variants): Variants {
  if (!prefers) return variants;
  const stripped: Variants = {};
  for (const key in variants) {
    const v = variants[key];
    if (typeof v === "object" && v !== null && !Array.isArray(v)) {
      const { transition: _t, ...rest } = v as Record<string, unknown>;
      stripped[key] = { ...rest, transition: { duration: 0 } } as Variants[string];
    } else {
      stripped[key] = v;
    }
  }
  return stripped;
}
