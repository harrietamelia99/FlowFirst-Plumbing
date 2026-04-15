"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  strength?: number; // degrees of tilt
  as?: "div" | "article";
}

export default function TiltCard({
  children,
  className = "",
  style,
  strength = 10,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;  // -0.5 → 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) translateZ(6px)`;
    el.style.transition = "transform 0.06s linear";
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.transition = "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)";
  };

  return (
    // @ts-expect-error dynamic tag
    <Tag
      ref={ref}
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </Tag>
  );
}
