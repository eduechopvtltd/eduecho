"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
}

export default function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  duration = "40s",
}: MarqueeProps) {
  return (
    <div
      className={`marquee-container ${vertical ? "marquee-vertical" : ""} ${
        pauseOnHover ? "marquee-pause-hover" : ""
      } ${className || ""}`}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={`marquee-content ${reverse ? "marquee-reverse" : ""}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
