"use client";

import { useEffect } from "react";

export function useReveal(): void {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    els.forEach((el, i) => {
      const delay = Math.min(i * 40, 600);
      window.setTimeout(() => {
        el.classList.add("in");
      }, delay);
    });
  }, []);
}
