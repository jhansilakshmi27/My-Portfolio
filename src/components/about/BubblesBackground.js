import React, { useEffect, useRef } from "react";

const BUBBLE_COUNT = 35; 
const COLORS = [
  "rgba(80,160,255,0.22)",
  "rgba(120,180,255,0.18)",
  "rgba(60,130,255,0.25)",
  "rgba(40,120,220,0.20)"
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const BubblesBackground = () => {
  const canvasRef = useRef(null);
  const bubbles = useRef(
    Array.from({ length: BUBBLE_COUNT }).map(() => ({
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(0, window.innerHeight),
      r: randomBetween(20, 30), // smaller bubbles
      dx: randomBetween(-0.18, 0.18),
      dy: randomBetween(-0.09, 0.09),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: randomBetween(0.22, 0.5)
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame;
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    function drawBubble(b) {
      const grad = ctx.createRadialGradient(
        b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.2,
        b.x, b.y, b.r
      );
      grad.addColorStop(0, `rgba(255,255,255,${b.alpha * 0.7})`);
      grad.addColorStop(0.5, b.color.replace('0.2', b.alpha));
      grad.addColorStop(1, `rgba(30,50,120,${b.alpha * 0.12})`);

      ctx.save();
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.shadowColor = "#55aaff";
      ctx.shadowBlur = 22;
      ctx.fillStyle = grad;
      ctx.globalAlpha = b.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.restore();
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.current.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < -b.r) b.x = canvas.width + b.r;
        if (b.x > canvas.width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = canvas.height + b.r;
        if (b.y > canvas.height + b.r) b.y = -b.r;

        drawBubble(b);
      });

      frame = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        zIndex: 0,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none"
      }}
    />
  );
};

export default BubblesBackground;
