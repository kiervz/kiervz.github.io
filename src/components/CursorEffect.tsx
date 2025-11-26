import { useEffect, useState, useRef } from 'react';

const CursorEffect: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const requestRef = useRef<number | null>(null);
  const targetPosition = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', moveCursor);

    const updateCursor = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (targetPosition.current.x - prev.x) * 0.1, // Smooth delay effect
        y: prev.y + (targetPosition.current.y - prev.y) * 0.1,
      }));

      requestRef.current = requestAnimationFrame(updateCursor);
    };

    requestRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        background: `radial-gradient(700px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.30), transparent 80%)`,
      }}
    />
  );
};

export default CursorEffect;
