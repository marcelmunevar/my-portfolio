"use client";
import React, { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number; // ms per char
  deletingSpeed?: number; // ms per char when deleting
  pause?: number; // pause at end of word in ms
  className?: string;
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 40,
  pause = 1200,
  className = "",
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const pauseRef = useRef<number | null>(null);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    // compute next text
    const nextText = isDeleting
      ? current.slice(0, Math.max(0, text.length - 1))
      : current.slice(0, text.length + 1);

    const delta = isDeleting ? deletingSpeed : typingSpeed;

    // schedule the typing/deleting step
    timeoutRef.current = window.setTimeout(() => {
      setText(nextText);

      // If we've completed typing the word, schedule switching to delete after a pause
      if (!isDeleting && nextText === current) {
        pauseRef.current = window.setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }

      // If we've finished deleting, move to next word
      if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setWordIndex((i) => i + 1);
      }
    }, delta);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      if (pauseRef.current) window.clearTimeout(pauseRef.current);
    };
    // Intentionally include text/isDeleting/wordIndex/words so effect reacts to those
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={`inline-block ${className}`}>
      <span>{text}</span>
      <span className="ml-2 inline-block align-middle cursor-anim">|</span>
    </span>
  );
}
