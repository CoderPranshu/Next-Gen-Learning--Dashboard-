"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function MotionCard({
  children,
  className,
}: Props) {
  return (
    <motion.div
  className={className}
  variants={{
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  }}
  whileHover={{
    scale: 1.02,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
  }}
>
      {children}
    </motion.div>
  );
}