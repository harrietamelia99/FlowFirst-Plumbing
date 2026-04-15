"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? el.scrollTop / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[200] h-[2px] pointer-events-none origin-left"
      style={{
        width: `${progress * 100}%`,
        background: "linear-gradient(90deg, #9ee7f0, #419ebc)",
        transition: "width 80ms linear",
      }}
    />
  );
}
