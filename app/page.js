import React from "react";
import LoanCalculator from "@/components/LoanCalculator";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Main = () => {
  return (
    <div className="bg-[#f3f4f6]">
      {/* <Header /> */}
      <Hero />
      <About />
      <LoanCalculator />

      {/* <Footer /> */}
    </div>
  );
};

export default Main;
