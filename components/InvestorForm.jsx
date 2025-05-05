"use client";
import { useState, useMemo } from "react";

export default function InvestorForm({ loan, onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [percent, setPercent] = useState(100);

  // For demo, assume 12% annual interest, simple interest
  const interestRate = 0.12;
  const amountToFund = useMemo(
    () => Math.round((loan.amount * percent) / 100),
    [loan.amount, percent]
  );
  const estimatedReturn = useMemo(
    () =>
      Math.round(
        amountToFund + (amountToFund * interestRate * loan.tenorMonths) / 12
      ),
    [amountToFund, interestRate, loan.tenorMonths]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onSubmit({
      name,
      email,
      percent,
      amount: amountToFund,
      estimatedReturn,
    });
  };

  return (
    <div className="space-y-6">
      {/* Loan Details Card */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="relative h-32">
          <img
            src={loan.listing.images[0]}
            alt={loan.listing.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3">
            <h3 className="text-white font-semibold truncate">
              {loan.listing.title}
            </h3>
            <p className="text-white/90 text-sm">{loan.listing.location}</p>
          </div>
        </div>
        <div className="p-4 bg-gray-50 space-y-2 text-sm">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <div>
              <span className="text-gray-600">Loan Amount:</span>
              <p className="font-semibold text-gray-900">
                GHS {loan.amount.toLocaleString()}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Term:</span>
              <p className="font-semibold text-gray-900">
                {loan.tenorMonths} months
              </p>
            </div>
            <div>
              <span className="text-gray-600">Monthly Payment:</span>
              <p className="font-semibold text-gray-900">
                GHS{" "}
                {(loan.amount / loan.tenorMonths).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Applicant:</span>
              <p className="font-semibold text-gray-900">
                {loan.borrower.fullName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Investment Percentage: {percent}%
          </label>
          <input
            type="range"
            min={10}
            max={100}
            step={5}
            value={percent}
            onChange={(e) => setPercent(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>

        {/* Investment Summary */}
        <div className="bg-indigo-50 rounded-lg p-4 space-y-3">
          <h4 className="font-medium text-indigo-900">Investment Summary</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-600">Amount to Fund:</span>
              <p className="font-semibold text-indigo-900">
                GHS {amountToFund.toLocaleString()}
              </p>
            </div>
            <div>
              <span className="text-gray-600">Interest Rate:</span>
              <p className="font-semibold text-indigo-900">12% per annum</p>
            </div>
            <div>
              <span className="text-gray-600">Term:</span>
              <p className="font-semibold text-indigo-900">
                {loan.tenorMonths} months
              </p>
            </div>
            <div>
              <span className="text-gray-600">Total Return:</span>
              <p className="font-semibold text-green-700">
                GHS {estimatedReturn.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            *Estimated returns are calculated using simple interest
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          >
            Confirm Investment
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    // <form onSubmit={handleSubmit} className="space-y-6">
    //   <h2 className="text-2xl font-bold mb-2">Fund Loan Request</h2>
    //   <h3>{loan.title}</h3>
    //   <div>
    //     <label className="block text-sm font-medium mb-1">Your Name</label>
    //     <input
    //       className="w-full border rounded px-3 py-2"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label className="block text-sm font-medium mb-1">Your Email</label>
    //     <input
    //       className="w-full border rounded px-3 py-2"
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label className="block text-sm font-medium mb-1">
    //       Percentage to Fund: <span className="font-semibold">{percent}%</span>
    //     </label>
    //     <input
    //       type="range"
    //       min={10}
    //       max={100}
    //       step={5}
    //       value={percent}
    //       onChange={(e) => setPercent(Number(e.target.value))}
    //       className="w-full"
    //     />
    //   </div>
    //   <div className="bg-gray-50 rounded p-4 text-sm">
    //     <div>
    //       <span className="font-medium">Amount to Fund:</span>{" "}
    //       <span className="text-green-700 font-semibold">
    //         GHS {amountToFund.toLocaleString()}
    //       </span>
    //     </div>
    //     <div>
    //       <span className="font-medium">Estimated Return:</span>{" "}
    //       <span className="text-indigo-700 font-semibold">
    //         GHS {estimatedReturn.toLocaleString()}
    //       </span>
    //     </div>
    //     <div>
    //       <span className="font-medium">Term:</span> {loan.tenorMonths} months
    //     </div>
    //     <div>
    //       <span className="font-medium">Interest Rate:</span> 12% p.a.
    //     </div>
    //   </div>
    //   <div className="flex gap-2">
    //     <button
    //       type="submit"
    //       className="bg-indigo-600 text-white px-6 py-2 rounded font-semibold hover:bg-indigo-700"
    //     >
    //       Fund Now
    //     </button>
    //     <button
    //       type="button"
    //       className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold hover:bg-gray-300"
    //       onClick={onCancel}
    //     >
    //       Cancel
    //     </button>
    //   </div>
    // </form>
  );
}
