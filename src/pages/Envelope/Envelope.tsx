import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Envelope.module.css";

type Props = {
  onAbrir: () => void;
};

export function Envelope({ onAbrir }: Props) {
  useEffect(() => {
    const timer = setTimeout(onAbrir, 2400);
    return () => clearTimeout(timer);
  }, [onAbrir]);

  return (
    <motion.main
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.envelope}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: [0.6, 1, 1.1, 3],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.2,
          ease: "easeIn",
          times: [0, 0.2, 0.6, 1],
        }}
      >
        <svg
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgEnvelope}
        >
          {/* corpo */}
          <rect
            x="1"
            y="1"
            width="318"
            height="218"
            rx="4"
            fill="#F0EBE0"
            stroke="#D4CEC4"
            strokeWidth="1"
          />
          {/* inferior */}
          <path
            d="M1 218 L160 120 L319 218 Z"
            fill="#E8E2D6"
            stroke="#D4CEC4"
            strokeWidth="1"
          />
          {/* lateral esquerda */}
          <path
            d="M1 1 L160 110 L1 218"
            fill="#EDE7DB"
            stroke="#D4CEC4"
            strokeWidth="1"
          />
          {/* lateral direita */}
          <path
            d="M319 1 L160 110 L319 218"
            fill="#EDE7DB"
            stroke="#D4CEC4"
            strokeWidth="1"
          />
          {/* aba fechada */}
          <path
            d="M1 1 L160 105 L319 1 Z"
            fill="#E8E2D6"
            stroke="#D4CEC4"
            strokeWidth="1"
          />
          {/* lacre */}
          <circle cx="160" cy="90" r="14" fill="#8B1A2F" />
          <ellipse
            cx="160"
            cy="80"
            rx="4"
            ry="6"
            fill="#C4526A"
            opacity="0.8"
          />
          <ellipse
            cx="160"
            cy="100"
            rx="4"
            ry="6"
            fill="#C4526A"
            opacity="0.8"
          />
          <ellipse
            cx="150"
            cy="90"
            rx="6"
            ry="4"
            fill="#C4526A"
            opacity="0.8"
          />
          <ellipse
            cx="170"
            cy="90"
            rx="6"
            ry="4"
            fill="#C4526A"
            opacity="0.8"
          />
          <circle cx="160" cy="90" r="5" fill="#6B1223" />
        </svg>
      </motion.div>
    </motion.main>
  );
}
