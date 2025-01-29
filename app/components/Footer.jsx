const Footer = () => {
  const footerLinks = {
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        // { name: "Press", href: "#" },
        // { name: "Blog", href: "#" },
      ],
    },
    product: {
      title: "Product",
      links: [
        // { name: "How It Works", href: "#" },
        // { name: "Pricing", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Apply Now", href: "#" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        // { name: "Cookie Policy", href: "#" },
        // { name: "Compliance", href: "#" },
      ],
    },
    contact: {
      title: "Contact",
      links: [
        {
          name: "support@pavefinance.com",
          href: "mailto:support@pavefinance.com",
        },
        { name: "1-800-PAVE-123", href: "tel:18007283123" },
        { name: "Contact Us", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h2 className="md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                PAVE FINANCE
              </h2>
            </div>
            <p className="max-sm:text-sm text-gray-400 mb-4 max-w-md">
              Making rental payments easier and more accessible. Your trusted
              partner in flexible rent payment solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm md:text-lg font-semibold md:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs md:text-base text-gray-400 hover:text-gray-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PAVE FINANCE. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <img
                src="https://placehold.co/40x25"
                alt="SSL Security"
                className="h-6"
              />
              <img
                src="https://placehold.co/40x25"
                alt="Payment Methods"
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
