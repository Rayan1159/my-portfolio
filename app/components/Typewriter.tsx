"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  loop?: boolean;
}

export default function Typewriter({ text, speed = 35, loop = false }: TypewriterProps) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let active = true;

    const tick = () => {
      if (!active) return;
      setDisplay(text.slice(0, i));
      i++;
      if (i <= text.length) {
        setTimeout(tick, speed);
      } else if (loop) {
        setTimeout(() => {
          i = 0;
          tick();
        }, 1200);
      }
    };

    tick();
    return () => {
      active = false;
    };
  }, [text, speed, loop]);

  return (
    <span className="whitespace-pre-wrap">
      {display}
      <span className="inline-block w-[0.6ch] bg-[--hacker-accent] ml-[1px] animate-caret" aria-hidden />
    </span>
  );
}
