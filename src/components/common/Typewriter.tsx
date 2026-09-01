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
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible || words.length === 0) {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    const current = words[wordIndex];

    if (!isDeleting) {
      // Type the word
      if (text.length < current.length) {
        timeoutRef.current = window.setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing — wait before deleting
        timeoutRef.current = window.setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      // Delete the word
      if (text.length > 0) {
        timeoutRef.current = window.setTimeout(() => {
          setText(text.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        // Move to the next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [text, wordIndex, isDeleting, words, typingSpeed, isVisible]);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      <span>{text}</span>
      <span className="inline-block align-middle cursor-anim" aria-hidden>
        |
      </span>
    </span>
  );
}
