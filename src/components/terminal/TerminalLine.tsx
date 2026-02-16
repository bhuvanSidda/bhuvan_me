"use client";

import { motion } from "framer-motion";

interface TerminalLineProps {
  text: string;
  delay: number;
  green?: boolean;
}

export function TerminalLine({ text, delay, green }: TerminalLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.05 }}
      className={`font-mono text-sm ${green ? "text-bloomberg-green" : "text-terminal-text"}`}
    >
      {text}
    </motion.div>
  );
}
