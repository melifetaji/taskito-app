import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

function MiddlewareFade({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default MiddlewareFade;
