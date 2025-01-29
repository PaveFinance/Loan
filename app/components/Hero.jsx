// import React from "react";
// import Phone from "./Phone";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <div>
//       <div className="mx-auto p-3 max-w-7xl grid md:grid-cols-2">
//         <div className=" flex max-sm:justify-center mt-10 items-center">
//           <div className="space-y-5">
//             <p className="text-4xl md:text-6xl lg:text-7xl font-bold max-md:text-center">
//               Why pay a year's rent upfront?
//             </p>
//             <p className="md:text-2xl lg:text-3xl font-bold max-sm:text-center">
//               Let{" "}
//               <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extrabold pb-4">
//                 Pave
//               </span>{" "}
//               do it for you
//             </p>
//             <div className="flex max-sm:justify-center">
//               <Link
//                 href="#loan"
//                 className="bg-black text-white max-sm:px-3 max-sm:py-2  text-sm px-4 py-3 rounded-md hover:bg-black/70"
//               >
//                 Request a loan
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className=" ">
//           <Phone />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;\

"use client";

import { motion } from "motion/react";
import Phone from "./Phone";
import { useEffect, useState } from "react";
import Link from "next/link";
const Hero = () => {
  const FloatingIcon = ({ d, color, ...props }) => (
    <motion.svg
      viewBox="0 0 24 24"
      width="40"
      height="40"
      fill={color}
      className="absolute opacity-70 max-sm:w-6 max-sm:h-6"
      {...props}
    >
      <path d={d} />
    </motion.svg>
  );
  const icons = [
    {
      // Bank icon
      d: "M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-7-5L2 9h19L14 5z",
      initialX: 600,
      initialY: 200,
      color: "#6C63FF", // Purple
      mobileX: 280, // Adjusted position for mobile
      mobileY: 10,
    },
    {
      // Money/Dollar icon
      d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
      initialX: 150,
      initialY: 400,
      color: "#50C878", // Emerald Green
      mobileX: 50,
      mobileY: 200,
    },
    {
      // Wallet icon
      d: "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
      initialX: 500,
      initialY: 600,
      color: "#FF6B6B", // Coral Red
      mobileX: 300,
      mobileY: 250,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div className="relative overflow-hidden bg-white ">
      {/* Floating Icons */}
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          d={icon.d}
          color={icon.color}
          initial={{
            x: isMobile ? icon.mobileX : icon.initialX,
            y: isMobile ? icon.mobileY : icon.initialY,
          }}
          animate={{
            y: isMobile
              ? [icon.mobileY - 10, icon.mobileY + 10]
              : [icon.initialY - 20, icon.initialY + 20],
            x: isMobile
              ? [icon.mobileX - 5, icon.mobileX + 5]
              : [icon.initialX - 10, icon.initialX + 10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: isMobile ? 3 : 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />
      ))}

      {/* Hero Content */}
      <div className="mx-auto p-3 max-w-7xl grid md:grid-cols-2 relative z-10">
        <motion.div
          className="flex max-sm:justify-center mt-10 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-5">
            <motion.p
              className="text-4xl md:text-6xl lg:text-7xl font-bold max-md:text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Why pay a year's rent upfront?
            </motion.p>
            <motion.p
              className="md:text-2xl lg:text-3xl font-bold max-sm:text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extrabold pb-4">
                Pave
              </span>{" "}
              do it for you
            </motion.p>
            <motion.div
              className="flex max-sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="#loan"
                className="bg-black text-white max-sm:px-3 max-sm:py-2 text-sm px-4 py-3 rounded-md hover:bg-black/70 transition-colors"
              >
                Request a loan
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Phone />
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
