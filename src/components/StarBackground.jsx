import { useEffect, useState, useRef } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothRef = useRef({ x: 0, y: 0 });

  const speedFactor = 2; // Increase for faster star movement

  useEffect(() => {
    generateStars();
    generateMeteors();
    animateMouseParallax();

    const handleResize = () => generateStars();

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseRef.current = { x, y };
    };

    const handleClick = (e) => {
      const newSparkles = Array.from({ length: 10 }).map((_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 2,
        opacity: 1,
        life: 1,
      }));

      setSparkles((prev) => [...prev, ...newSparkles]);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const animateMouseParallax = () => {
    const step = () => {
      // smooth interpolation
      smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.05;
      smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.05;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  // Update sparkle opacity and remove dead ones
  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((s) => ({ ...s, opacity: s.opacity - 0.05 }))
          .filter((s) => s.opacity > 0)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => {
        const offsetX = star.x + smoothRef.current.x * speedFactor;
        const offsetY = star.y + smoothRef.current.y * speedFactor;
        return (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${offsetX}%`,
              top: `${offsetY}%`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`,
              position: "absolute",
              borderRadius: "9999px",
              backgroundColor: "white",
            }}
          />
        );
      })}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
            position: "absolute",
            background: "linear-gradient(90deg, white, transparent)",
            transform: "rotate(45deg)",
            borderRadius: "9999px",
          }}
        />
      ))}

      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            position: "fixed",
            left: sparkle.x + Math.random() * 10 - 5,
            top: sparkle.y + Math.random() * 10 - 5,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: sparkle.opacity,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};
