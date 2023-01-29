import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};

function TextInWhenVisible({ children }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default TextInWhenVisible;
