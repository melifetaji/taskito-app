import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};

function FadeInWhenVisible({ children }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.7 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
