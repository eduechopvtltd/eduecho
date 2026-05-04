"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextAnimateProps {
  children: string;
  className?: string;
  delay?: number;
  type?: "word" | "char";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function TextAnimate({
  children,
  className,
  delay = 0,
  type = "word",
  as: Tag = "p",
}: TextAnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const items = type === "word" ? children.split(" ") : children.split("");

  return (
    <Tag ref={ref} className={className}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 10, filter: "blur(4px)" }
          }
          transition={{
            duration: 0.3,
            delay: delay + i * 0.04,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {item}
          {type === "word" ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
