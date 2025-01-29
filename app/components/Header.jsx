"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Loan", href: "#loan" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 border z-40 backdrop-blur-md bg-white/80">
        <div className="flex justify-between items-center mx-auto max-w-7xl p-4">
          <Link
            href="/"
            className="lg:text-2xl bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text font-extrabold"
          >
            Pave Finance
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-bold hover:text-blue-500 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg md:hidden z-50 overflow-y-auto"
            >
              <div className="flex flex-col p-4">
                <nav className="flex flex-col space-y-4 mt-16">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="font-semibold text-sm transition-colors p-2 hover:bg-gray-50 rounded bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
