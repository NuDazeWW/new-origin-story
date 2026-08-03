/**
 * DIS ORIGIN — Publication Engine
 * Manages horizontal scroll between spreads with keyboard, click, and swipe support.
 * Each spread is a full-viewport panel. Navigation arrows + progress bar + keyboard arrows.
 */

import { useCallback, useEffect, useRef, useState } from "react";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

interface PublicationProps {
  children: React.ReactNode[];
  spreadCount: number;
  onSpreadChange?: (index: number) => void;
}

export default function Publication({ children, spreadCount, onSpreadChange }: PublicationProps) {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      const clamped = Math.max(0, Math.min(spreadCount - 1, index));
      if (clamped === currentSpread) return;
      // Static review mode: switch instantly, no transition lock, no tween.
      if (STATIC_REVIEW_MODE) {
        setCurrentSpread(clamped);
        onSpreadChange?.(clamped);
        return;
      }
      setIsTransitioning(true);
      setCurrentSpread(clamped);
      onSpreadChange?.(clamped);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [currentSpread, isTransitioning, spreadCount, onSpreadChange]
  );

  const next = useCallback(() => goTo(currentSpread + 1), [currentSpread, goTo]);
  const prev = useCallback(() => goTo(currentSpread - 1), [currentSpread, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Wheel navigation
  useEffect(() => {
    let wheelTimeout: ReturnType<typeof setTimeout>;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 30 || e.deltaX > 30) next();
        else if (e.deltaY < -30 || e.deltaX < -30) prev();
      }, 50);
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(wheelTimeout);
    };
  }, [next, prev]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }
  };

  const progress = ((currentSpread + 1) / spreadCount) * 100;

  return (
    <div
      style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden", background: "#05080F" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Horizontal track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          flexDirection: "row",
          width: `${spreadCount * 100}vw`,
          height: "100vh",
          transform: `translateX(-${currentSpread * 100}vw)`,
          transition: STATIC_REVIEW_MODE
            ? "none"
            : isTransitioning
              ? "transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)"
              : "transform 0.7s cubic-bezier(0.77, 0, 0.175, 1)",
          animation: STATIC_REVIEW_MODE ? "none" : undefined,
          willChange: "transform",
        }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            style={{
              minWidth: "100vw",
              width: "100vw",
              height: "100vh",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
              // Static review mode: guarantee exactly one spread is present.
              visibility: STATIC_REVIEW_MODE && i !== currentSpread ? "hidden" : "visible",
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          height: "2px",
          width: `${progress}%`,
          background: "linear-gradient(to right, #1EA7FF, #00FFC2)",
          zIndex: 200,
          transition: STATIC_REVIEW_MODE ? "none" : "width 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />

      {/* Spread dots */}
      <div
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.5rem",
          zIndex: 200,
          alignItems: "center",
        }}
      >
        {Array.from({ length: spreadCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === currentSpread ? "1.5rem" : "0.35rem",
              height: "0.35rem",
              borderRadius: "9999px",
              background: i === currentSpread ? "#1EA7FF" : "rgba(30,167,255,0.25)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: STATIC_REVIEW_MODE ? "none" : "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            aria-label={`Go to spread ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev arrow */}
      {currentSpread > 0 && (
        <button
          onClick={prev}
          className="spread-nav-btn prev"
          aria-label="Previous spread"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="#E6EBF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Next arrow */}
      {currentSpread < spreadCount - 1 && (
        <button
          onClick={next}
          className="spread-nav-btn next"
          aria-label="Next spread"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="#E6EBF1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

    </div>
  );
}
