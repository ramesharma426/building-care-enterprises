"use client";

import { useEffect, useState } from "react";

/** Full-screen white overlay shown until every image on the page (plus
 * fonts/scripts, via `window.load`) has finished loading. Percentage is
 * approximate — driven by image load/error counts, with `window.load` as
 * the authoritative "done" signal so it can't hang if an image never
 * fires (e.g. blocked by an ad blocker). */
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(
    () => typeof document !== "undefined" && document.readyState === "complete"
  );

  useEffect(() => {
    const onLoad = () => {
      setProgress(100);
      setDone(true);
    };

    // `load` may have already fired before this effect ran (fast/cached
    // page) — window.addEventListener below would then never call back.
    if (document.readyState === "complete") {
      const id = setTimeout(onLoad, 0);
      return () => clearTimeout(id);
    }

    const images = Array.from(document.images);
    const total = images.length;
    let loaded = 0;

    const tick = () => {
      loaded += 1;
      setProgress(total ? Math.round((loaded / total) * 100) : 100);
    };

    images.forEach((img) => {
      if (img.complete) {
        tick();
      } else {
        img.addEventListener("load", tick, { once: true });
        img.addEventListener("error", tick, { once: true });
      }
    });

    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (done) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <span className="text-2xl font-semibold text-slate-900">{progress}%</span>
    </div>
  );
}
