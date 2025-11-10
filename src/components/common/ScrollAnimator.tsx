"use client";
import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    // IntersectionObserver: when element becomes visible, animate once and unobserve.
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (!entry.isIntersecting) return; // do nothing on exit; we animate only on entry

        // If element has already been animated, stop observing
        if (el.dataset.animated === "true") {
          io.unobserve(el);
          return;
        }

        // apply delay if provided via data-delay attribute (seconds)
        const delay = el.dataset?.delay ?? "0";
        el.style.transitionDelay = `${delay}s`;

        // add final visible state and mark as animated so it won't run again
        el.classList.add("in-view");
        el.dataset.animated = "true";

        // we want the animation only once
        io.unobserve(el);
      });
    }, observerOptions);

    // Initial scan: if an element is already in the viewport at page load, show it immediately
    const observeAll = (root: Document | HTMLElement = document) => {
      root.querySelectorAll<HTMLElement>(".fade-in-right").forEach((el) => {
        // ensure element has initial state class
        el.classList.add("fade-in-right");

        const rect = el.getBoundingClientRect();
        const inViewportOnLoad =
          rect.top < window.innerHeight && rect.bottom > 0;

        if (inViewportOnLoad) {
          // If element is already visible on initial load, show it immediately and mark animated
          el.classList.add("in-view");
          el.dataset.animated = "true";
        } else {
          io.observe(el);
        }
      });
    };

    observeAll();

    // observe DOM mutations so dynamically added elements are picked up
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches && node.matches(".fade-in-right")) {
            io.observe(node);
          }
          // also check descendants
          if (node.querySelectorAll) {
            node
              .querySelectorAll<HTMLElement>(".fade-in-right")
              .forEach((el) => io.observe(el));
          }
        });
      });
    });

    mo.observe(document.documentElement || document, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null; // no visual output; runs observers globally
}
