import React from "react";
import { FaCheckCircle, FaCalendarAlt, FaHome } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";

const About = () => {
  const features = [
    {
      icon: <FaCheckCircle className="text-4xl text-emerald-500 mb-4" />,
      title: "Simple Application",
      description:
        "Complete our easy online application in under 5 minutes with instant pre-approval.",
    },
    {
      icon: <BsCashStack className="text-4xl text-emerald-500 mb-4" />,
      title: "Flexible Payment Plans",
      description:
        "Choose payment terms from 3 to 12 months that fit your budget perfectly.",
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-emerald-500 mb-4" />,
      title: "Quick Processing",
      description:
        "Get approved within 24 hours and have your rent paid directly to your landlord.",
    },
    {
      icon: <FaHome className="text-4xl text-emerald-500 mb-4" />,
      title: "Move In Faster",
      description:
        "Skip the stress of saving for upfront payments and move into your dream home sooner.",
    },
  ];

  return (
    <section className="bg-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="md:text-2xl lg:text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Simplifying Your Path to Home
          </h2>
          <p className="lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Finding a home should be exciting, not stressful. At{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              PAVE FINANCE
            </span>
            , we revolutionize the rental process by paying your rent in
            advance, allowing you to move in without the burden of large upfront
            payments. Simply pay us back in affordable monthly installments.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="md:text-2xl font-semibold text-center mb-12">
            How PAVE FINANCE Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-2 lg:p-6 max-sm:shadow-lg rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h4 className="md:text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-emerald-50 p-8 rounded-xl">
            <h3 className="md:text-2xl font-semibold mb-4 text-emerald-700">
              Why Choose PAVE FINANCE?
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We've helped thousands of renters move into their dream homes
              sooner. Our transparent process, competitive rates, and dedicated
              support team ensure a smooth experience from application to
              approval. Join the growing number of satisfied clients who've
              trusted{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                PAVE FINANCE
              </span>{" "}
              with their rental journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
