import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface Heart {
  id: number;
  startLeft: number;
  endLeft: number;
  timeRun: number;
  opacityR: number;
  sizeR: number;
  screenHeight: number;
}

interface HeartRainProps {
  color?: string;
}

const getRandomArbitrary = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

const MAX_HEARTS = 20; // Limit number of hearts on screen
const SPAWN_RATE = 800; // Increase spawn time to 800ms

const HeartRain: React.FC<HeartRainProps> = ({ color = "#FF1493" }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const startLeft = getRandomArbitrary(0, screenWidth);
      const endLeft = getRandomArbitrary(startLeft - 50, startLeft + 50);
      const timeRun = getRandomArbitrary(5000, 7000); // Adjust duration
      const opacityR = Math.random() * (1 - 0.5) + 0.5; // Avoid very transparent hearts
      const sizeR = getRandomArbitrary(10, 180); // Reduce max size

      const newHeart: Heart = {
        id: Date.now(),
        startLeft,
        endLeft,
        timeRun,
        opacityR,
        sizeR,
        screenHeight,
      };

      setHearts((prevHearts) => {
        const updatedHearts = [...prevHearts, newHeart];
        return updatedHearts.length > MAX_HEARTS
          ? updatedHearts.slice(updatedHearts.length - MAX_HEARTS) // Keep only the latest
          : updatedHearts;
      });
    }, SPAWN_RATE);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {hearts.map(({ id, startLeft, endLeft, timeRun, opacityR, sizeR, screenHeight }) => (
          <motion.div
            key={id}
            initial={{ top: 0, left: startLeft, opacity: opacityR }}
            animate={{ top: screenHeight - sizeR, left: endLeft }}
            exit={{ opacity: 0 }}
            transition={{ duration: timeRun / 1000, ease: "linear" }}
            style={{
              width: `${sizeR}px`,
              height: `${sizeR}px`,
              position: "absolute",
              willChange: "transform, opacity",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} width="100%" height="100%">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const HeartRainWrapper = ({
  children,
  style,
  ...props
}: {
  children: React.ReactNode;
  style?: React.StyleHTMLAttributes<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export { HeartRain, HeartRainWrapper };
