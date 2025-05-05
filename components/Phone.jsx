const Phone = () => {
  return (
    <div className="flex justify-center  max-sm:mt-10 ">
      <svg
        viewBox="0 0 400 470"
        xmlns="http://www.w3.org/2000/svg"
        className="max-sm:h-[250px]"
      >
        {/* Background Elements */}
        {/* <circle cx="50" cy="450" r="100" fill="#4A90E2" opacity="0.1" />
        <circle cx="350" cy="50" r="80" fill="#6C63FF" opacity="0.1" /> */}

        {/* Phone Container */}
        <g transform="translate(100,40) rotate(15) skewY(-5)">
          {/* Phone Frame */}
          <rect x="0" y="0" width="200" height="400" rx="25" fill="#1a1a1a" />
          <rect x="5" y="5" width="190" height="390" rx="22" fill="#ffffff" />

          {/* Status Bar */}
          <rect x="5" y="5" width="190" height="25" fill="#f8f8f8" rx="22" />
          <text x="160" y="22" fontFamily="Arial" fontSize="10" fill="#000000">
            89%
          </text>
          <text x="15" y="22" fontFamily="Arial" fontSize="10" fill="#000000">
            9:41
          </text>

          {/* Header Gradient */}
          <defs>
            <linearGradient
              id="headerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#6C63FF" />
              <stop offset="100%" stopColor="#4A90E2" />
            </linearGradient>
          </defs>
          <rect
            x="5"
            y="30"
            width="190"
            height="70"
            fill="url(#headerGradient)"
          />
          <text
            x="20"
            y="65"
            fontFamily="Arial"
            fontSize="16"
            fill="#ffffff"
            fontWeight="bold"
          >
            Pave Finance
          </text>
          <text x="20" y="85" fontFamily="Arial" fontSize="10" fill="#ffffff">
            Smart Rent Solutions
          </text>

          {/* Balance Card */}
          <rect x="15" y="110" width="170" height="90" rx="15" fill="#f0f0f0" />
          <path d="M15,140 h170" stroke="#e0e0e0" strokeWidth="1" />
          <text x="25" y="130" fontFamily="Arial" fontSize="12" fill="#666">
            Current Balance
          </text>
          <text
            x="25"
            y="165"
            fontFamily="Arial"
            fontSize="24"
            fill="#333"
            fontWeight="bold"
          >
            $1,200
          </text>
          <text x="25" y="185" fontFamily="Arial" fontSize="10" fill="#666">
            Available Credit
          </text>

          {/* Action Buttons */}
          <rect x="15" y="210" width="80" height="60" rx="10" fill="#6C63FF" />
          <rect x="105" y="210" width="80" height="60" rx="10" fill="#4A90E2" />
          <text x="30" y="245" fontFamily="Arial" fontSize="12" fill="#ffffff">
            Pay Rent
          </text>
          <text x="115" y="245" fontFamily="Arial" fontSize="12" fill="#ffffff">
            Get Loan
          </text>

          {/* Activity Section */}
          <text
            x="15"
            y="295"
            fontFamily="Arial"
            fontSize="14"
            fill="#333"
            fontWeight="bold"
          >
            Recent Activity
          </text>

          {/* Transactions */}
          <rect x="15" y="305" width="170" height="40" rx="8" fill="#f8f8f8" />
          <circle cx="35" cy="325" r="10" fill="#4A90E2" opacity="0.2" />
          <text x="55" y="330" fontFamily="Arial" fontSize="12" fill="#333">
            Rent Payment
          </text>

          <rect x="15" y="355" width="170" height="40" rx="8" fill="#f8f8f8" />
          <circle cx="35" cy="375" r="10" fill="#6C63FF" opacity="0.2" />
          <text x="55" y="380" fontFamily="Arial" fontSize="12" fill="#333">
            Loan Approved
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Phone;
