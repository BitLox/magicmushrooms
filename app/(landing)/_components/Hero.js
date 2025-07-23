"use client";

import React, { useState, useRef, useEffect } from "react";

const Hero = () => {
  const [clickCount, setClickCount] = useState(0);
  const particleAlphaRef = useRef(0);
  const fadeOutRef = useRef(false);
  const fadeStartTimeRef = useRef(null);
  const fadeFromAlphaRef = useRef(0);
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const particlesRef = useRef([]);

  // Initialize particles once on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    // Generate 1500 particles
    for (let i = 0; i < 1500; i++) {
      particlesRef.current.push({
        x: Math.random() * (canvas?.width || window.innerWidth),
        y: Math.random() * (canvas?.height || window.innerHeight),
        radius: Math.random() * 5 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        speed: Math.random() * 2 + 1,
        angle: Math.random() * Math.PI * 2,
      });
    }
  }, []);

  // Quadratic ease-out function
  const easeOutQuad = (t) => t * (2 - t);

  // Animation loop
  const animate = (timestamp) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Handle fade out
    if (fadeOutRef.current) {
      if (!fadeStartTimeRef.current) fadeStartTimeRef.current = timestamp || performance.now();
      const elapsed = (timestamp || performance.now()) - fadeStartTimeRef.current;
      const progress = Math.min(elapsed / 1000, 1); // 1s fade as you updated
      particleAlphaRef.current = fadeFromAlphaRef.current * (1 - easeOutQuad(progress));
      if (progress >= 1) {
        particleAlphaRef.current = 0;
        fadeOutRef.current = false;
        fadeStartTimeRef.current = null;
        fadeFromAlphaRef.current = 0;
        setClickCount(0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
        return;
      }
    }

    // Semi-transparent fill for trails (fixed, no scaling—trails don't fade on first step)
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set alpha for particles
    ctx.globalAlpha = particleAlphaRef.current;

    particlesRef.current.forEach((p) => {
      // Random curve by adjusting angle
      p.angle += (Math.random() - 0.5) * 0.2;
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      // Wrap around edges
      if (p.x < -p.radius) p.x = canvas.width + p.radius;
      if (p.x > canvas.width + p.radius) p.x = -p.radius;
      if (p.y < -p.radius) p.y = canvas.height + p.radius;
      if (p.y > canvas.height + p.radius) p.y = -p.radius;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    animationIdRef.current = requestAnimationFrame(animate);
  };

  // Button click handler
  const handleTripClick = () => {
    if (fadeOutRef.current) return;
    const newCount = clickCount + 1;
    setClickCount(newCount);

    let targetAlpha;
    switch (newCount) {
      case 1:
        targetAlpha = 0.05;
        break;
      case 2:
        targetAlpha = 1.0;
        break;
      default:
        fadeOutRef.current = true;
        fadeStartTimeRef.current = null;
        fadeFromAlphaRef.current = particleAlphaRef.current;
        return;
    }

    particleAlphaRef.current = targetAlpha;
    if (!animationIdRef.current) {
      animationIdRef.current = requestAnimationFrame(animate);
    }
  };

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Optional: Reposition particles on resize to avoid clustering
        particlesRef.current.forEach((p) => {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
<div className="h-dvh flex items-center justify-center relative">
    {/* Swap this in for the old bg div */}
    <video
      autoPlay
      loop
      muted
      playsInline  // Crucial for autoplay on mobile (esp. iOS)
      className="absolute top-0 left-0 h-full w-full object-cover -z-10"
    >
      <source src="/mushroom_world.mp4" type="video/mp4" />  // Put your video in public/hero.mp4
      Your browser does not support the video tag.  // Fallback text (optional)
    </video>      <h1 className="text-6xl md:text-8xl font-bold text-white glow-text z-10 text-center">
        Magic Mushrooms Coin
      </h1>
      <button
        onClick={handleTripClick}
        className="absolute bottom-10 px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 z-20"
      >
        MYCO Trip!
      </button>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 h-full w-full pointer-events-none z-[5]"
      />
    </div>
  );
};

export default Hero;