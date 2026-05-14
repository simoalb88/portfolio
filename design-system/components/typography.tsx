import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type AsProp<E extends ElementType> = { as?: E };
type PolymorphicProps<E extends ElementType, P> = P &
  AsProp<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof P | "as">;

interface TextOwnProps {
  children: ReactNode;
  className?: string;
}

/**
 * Typography primitives — wired to the design token scale.
 * Use these instead of raw <h1>/<p> to keep the scale consistent.
 */

export function Display<E extends ElementType = "h1">({
  as,
  className,
  children,
  ...rest
}: PolymorphicProps<E, TextOwnProps>) {
  const Tag = (as ?? "h1") as ElementType;
  return (
    <Tag
      className={cn(
        "font-display tracking-tight",
        "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
        "leading-[0.95]",
        "text-balance",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H1<E extends ElementType = "h1">({
  as,
  className,
  children,
  ...rest
}: PolymorphicProps<E, TextOwnProps>) {
  const Tag = (as ?? "h1") as ElementType;
  return (
    <Tag
      className={cn(
        "font-display tracking-tight",
        "text-4xl sm:text-5xl md:text-6xl",
        "leading-[1.05]",
        "text-balance",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H2<E extends ElementType = "h2">({
  as,
  className,
  children,
  ...rest
}: PolymorphicProps<E, TextOwnProps>) {
  const Tag = (as ?? "h2") as ElementType;
  return (
    <Tag
      className={cn(
        "font-display tracking-tight",
        "text-3xl sm:text-4xl md:text-5xl",
        "leading-[1.1]",
        "text-balance",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H3<E extends ElementType = "h3">({
  as,
  className,
  children,
  ...rest
}: PolymorphicProps<E, TextOwnProps>) {
  const Tag = (as ?? "h3") as ElementType;
  return (
    <Tag
      className={cn(
        "font-sans font-semibold tracking-tight",
        "text-2xl sm:text-3xl",
        "leading-[1.2]",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function H4<E extends ElementType = "h4">({
  as,
  className,
  children,
  ...rest
}: PolymorphicProps<E, TextOwnProps>) {
  const Tag = (as ?? "h4") as ElementType;
  return (
    <Tag
      className={cn(
        "font-sans font-semibold",
        "text-xl sm:text-2xl",
        "leading-snug",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Lead({ className, children, ...rest }: TextOwnProps & ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "text-lg sm:text-xl",
        "leading-relaxed",
        "text-[var(--color-fg-muted)]",
        "max-w-[var(--container-prose)]",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

export function Body({ className, children, ...rest }: TextOwnProps & ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "text-base",
        "leading-relaxed",
        "max-w-[var(--container-prose)]",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

export function Small({ className, children, ...rest }: TextOwnProps & ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "text-sm",
        "leading-normal",
        "text-[var(--color-fg-muted)]",
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

export function Eyebrow({ className, children, ...rest }: TextOwnProps & ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "inline-block",
        "font-mono text-xs font-medium uppercase tracking-[0.18em]",
        "text-[var(--color-accent)]",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

export function Code({ className, children, ...rest }: TextOwnProps & ComponentPropsWithoutRef<"code">) {
  return (
    <code
      className={cn(
        "font-mono text-[0.92em]",
        "px-1.5 py-0.5 rounded-[var(--radius-sm)]",
        "bg-[var(--color-bg-muted)]",
        "border border-[var(--color-border)]",
        className,
      )}
      {...rest}
    >
      {children}
    </code>
  );
}
