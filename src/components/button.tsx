import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "text"; className?: string };
export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) { return <Link className={`button button-${variant} ${className}`} href={href}>{children}</Link>; }
