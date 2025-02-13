"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // 5 seconds loading duration
  }, [setLoading]);

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0f2c] to-[#020617] z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 3.5 }} // Smooth transition
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src="/logo.png" alt="DJ TAHAA Logo" width={400} height={400} className="animate-bounce" />
      </motion.div>
      <motion.p 
        className="mt-4 text-2xl text-white opacity-80 text-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Get Ready for DJ TAHAA!
      </motion.p>

      <style jsx>{`
        @keyframes textGlow {
          0% { text-shadow: 0px 0px 10px rgba(0, 153, 255, 0.7); }
          50% { text-shadow: 0px 0px 20px rgba(0, 153, 255, 1); }
          100% { text-shadow: 0px 0px 10px rgba(0, 153, 255, 0.7); }
        }
        .text-glow {
          animation: textGlow 2s infinite alternate ease-in-out;
        }
      `}</style>
    </motion.div>
  );
};

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setLoading(false);
    }
  }, [pathname]);

  return loading ? <LoadingScreen setLoading={setLoading} /> : <>{children}</>;
};

export default LoadingWrapper;