import { ReactNode } from "react";
import { motion } from "framer-motion";

export const AuthWrapper = ({
  children,
  showSocials,
}: {
  children: ReactNode;
  showSocials: boolean;
}) => {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {children}
      </motion.div>
    </div>
  );
};
