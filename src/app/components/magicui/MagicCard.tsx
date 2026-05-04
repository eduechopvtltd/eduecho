"use client";

import React, { useCallback, useRef } from "react";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  gradientSize?: number;
  gradientOpacity?: number;
}

export default function MagicCard({
  children,
  className,
  gradientColor = "#f97316",
  gradientSize = 250,
  gradientOpacity = 0.15,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    },
    []
  );

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`magic-card ${className || ""}`}
      style={
        {
          "--gradient-color": gradientColor,
          "--gradient-size": `${gradientSize}px`,
          "--gradient-opacity": gradientOpacity,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
