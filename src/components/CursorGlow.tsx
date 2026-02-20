import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;

    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      
      // Trail follows with delay
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`;
      trail.style.transform = `translate(${trailX - 6}px, ${trailY - 6}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseDown = () => {
      cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px) scale(0.8)`;
    };

    const handleMouseUp = () => {
      cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px) scale(1)`;
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-glow-trail" />
      <div ref={cursorRef} className="cursor-glow" />
    </>
  );
};

export default CursorGlow;
