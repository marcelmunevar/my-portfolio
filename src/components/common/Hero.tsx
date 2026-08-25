"use client";
import React from "react";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <header className="bg-transparent py-12">
      <div className="container mx-auto px-8 max-w-4xl text-center">
        <div className="text-4xl md:text-6xl font-extrabold leading-tight">
          Lead Developer building
          <span className="block text-primary mt-4">
            <Typewriter
              words={[
                "modern web applications",
                "full-stack applications",
                "web platforms",
                "reliable infrastructure",
              ]}
              typingSpeed={90}
              className="text-4xl md:text-6xl"
            />
          </span>
        </div>
      </div>
    </header>
  );
}
