"use client";
import React, { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number; // ms per char
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  className = "",
}: TypewriterProps) {
  const [text, setText] = useState("");
  const timeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // If not visible, pause typing and clear any pending timers
    if (!isVisible) {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    const current = words[0]; // Only use the first word
    const nextText = current.slice(0, text.length + 1);
    const delta = typingSpeed;

    if (text !== current) {
      timeoutRef.current = window.setTimeout(() => {
        setText(nextText);
      }, delta);
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // Intentionally include text/words so effect reacts to those
  }, [text, words, typingSpeed, isVisible]);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      <span>{text}</span>
      {/* remove ml-2 margin so cursor sits directly after text */}
      <span className="inline-block align-middle cursor-anim" aria-hidden>
        |
      </span>
    </span>
  );
}
