
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const ScrollTypewriter = ({  text,
  speed = 35,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      viewport={{
        once: true,
        amount: 0.5,
      }}
    >
      {displayedText}

      {started && displayedText.length < text.length && (
        <span className="ml-1 animate-pulse text-emerald-500">
          |
        </span>
      )}
    </motion.span>
  );
};
export default ScrollTypewriter;
