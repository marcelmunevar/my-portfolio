"use client";
import React from "react";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <header className="bg-transparent py-12">
      <div className="container mx-auto px-8 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Meet your new
          <span className="block text-primary mt-4">
            <Typewriter
              words={[
                "Lead Developer",
                "Senior Developer",
                "Tech Lead",
                "Engineering Manager",
                "Software Architect",
              ]}
              typingSpeed={90}
              deletingSpeed={40}
              pause={1400}
              className="text-4xl md:text-6xl"
            />
          </span>
        </h1>
      </div>
    </header>
  );
}
