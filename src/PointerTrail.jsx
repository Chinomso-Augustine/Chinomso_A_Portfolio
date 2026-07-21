import React from "react";

export default function PointerTrail() {
  const cursorRef = React.useRef(null);
  const lastParticleTimeRef = React.useRef(0);

  React.useEffect(() => {
    const canUseCustomPointer = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    ).matches;

    if (!canUseCustomPointer) {
      return undefined;
    }

    const createParticle = (x, y) => {
      const particle = document.createElement("span");
      const hue = Math.floor((x / window.innerWidth) * 240 + 120);
      const size = 20 + Math.random() * 14;

      particle.classList.add("pointer-particle");
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `hsl(${hue}, 100%, 65%)`;
      particle.style.boxShadow = `0 0 18px hsl(${hue}, 100%, 65%)`;

      document.body.appendChild(particle);
      particle.addEventListener("animationend", () => particle.remove(), { once: true });
    };

    const handlePointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }

      const currentTime = performance.now();

      if (currentTime - lastParticleTimeRef.current > 25) {
        createParticle(x, y);
        lastParticleTimeRef.current = currentTime;
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.querySelectorAll(".pointer-particle").forEach((particle) => particle.remove());
    };
  }, []);

  return <div ref={cursorRef} className="pointer-cursor" aria-hidden="true" />;
}
