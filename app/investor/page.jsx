// "use client";

// import { useState } from "react";
// import toast from "react-hot-toast";

// // Dummy data
// const dummyRequests = [
//   {
//     id: "1",
//     amount: 250000,
//     tenorMonths: 24,
//     salary: 8000,
//     status: "OPEN",
//     listing: {
//       id: 1,
//       title: "Modern 2BR Apartment in East Legon",
//       location: "East Legon, Accra",
//       price: 350000,
//       images: [
//         "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
//       ],
//     },
//     borrower: {
//       fullName: "Kwame Mensah",
//       email: "kwame@example.com",
//     },
//   },
//   {
//     id: "2",
//     amount: 180000,
//     tenorMonths: 36,
//     salary: 6500,
//     status: "OPEN",
//     listing: {
//       id: 2,
//       title: "Luxury 3BR Townhouse in Airport Residential",
//       location: "Airport Residential, Accra",
//       price: 280000,
//       images: [
//         "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
//       ],
//     },
//     borrower: {
//       fullName: "Abena Osei",
//       email: "abena@example.com",
//     },
//   },
//   {
//     id: "3",
//     amount: 150000,
//     tenorMonths: 18,
//     salary: 5500,
//     status: "OPEN",
//     listing: {
//       id: 3,
//       title: "Cozy 1BR Apartment in Cantonments",
//       location: "Cantonments, Accra",
//       price: 200000,
//       images: [
//         "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=600&q=80",
//       ],
//     },
//     borrower: {
//       fullName: "Yaw Addo",
//       email: "yaw@example.com",
//     },
//   },
//   {
//     id: "4",
//     amount: 320000,
//     tenorMonths: 30,
//     salary: 12000,
//     status: "OPEN",
//     listing: {
//       id: 4,
//       title: "Spacious 4BR House in Trasacco",
//       location: "Trasacco Valley, Accra",
//       price: 450000,
//       images: [
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
//       ],
//     },
//     borrower: {
//       fullName: "Efua Kumi",
//       email: "efua@example.com",
//     },
//   },
// ];

// export default function InvestorRequests() {
//   const [requests, setRequests] = useState(dummyRequests);
//   const [processingId, setProcessingId] = useState(null);

//   const handleInvest = async (applicationId) => {
//     setProcessingId(applicationId);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1200));
//       setRequests((prev) => prev.filter((req) => req.id !== applicationId));
//       toast.success("Investment successful!");
//     } catch (error) {
//       toast.error("Failed to process investment");
//       console.error(error);
//     } finally {
//       setProcessingId(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <header className="mb-10 text-center">
//           <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
//             Investment Opportunities
//           </h1>
//           <p className="text-lg text-gray-600">
//             Browse and fund rental loan requests from vetted applicants.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {requests.map((request) => (
//             <div
//               key={request.id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
//             >
//               <div className="relative">
//                 <img
//                   src={request.listing.images[0]}
//                   alt={request.listing.title}
//                   className="w-full h-48 object-cover rounded-t-2xl"
//                 />
//                 <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
//                   {request.listing.location}
//                 </span>
//               </div>
//               <div className="flex-1 flex flex-col p-6">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-1">
//                   {request.listing.title}
//                 </h2>
//                 <p className="text-gray-500 mb-4">
//                   <span className="font-medium">Applicant:</span>{" "}
//                   {request.borrower.fullName}
//                 </p>
//                 <div className="flex flex-col gap-2 mb-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Loan Amount</span>
//                     <span className="font-bold text-green-700 text-lg">
//                       GHS {request.amount.toLocaleString()}
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Term</span>
//                     <span>{request.tenorMonths} months</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Monthly Salary</span>
//                     <span>GHS {request.salary.toLocaleString()}</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Est. Monthly Payment</span>
//                     <span>
//                       GHS{" "}
//                       {(request.amount / request.tenorMonths).toLocaleString(
//                         undefined,
//                         { maximumFractionDigits: 2 }
//                       )}
//                     </span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleInvest(request.id)}
//                   disabled={processingId === request.id}
//                   className="mt-auto bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-600 text-white font-semibold py-2 rounded-xl shadow transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
//                 >
//                   {processingId === request.id ? (
//                     <span className="flex items-center justify-center gap-2">
//                       <svg
//                         className="animate-spin h-5 w-5"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         />
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         />
//                       </svg>
//                       Processing...
//                     </span>
//                   ) : (
//                     "Fund This Loan"
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}

//           {requests.length === 0 && (
//             <div className="col-span-full flex flex-col items-center justify-center py-20">
//               <svg
//                 className="h-16 w-16 text-gray-300 mb-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
//                 />
//               </svg>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                 No open loan requests
//               </h3>
//               <p className="text-gray-500">
//                 Check back later for new investment opportunities.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import SidePanelModal from "@/components/InvestorSidePAnel";
// Adjust path as needed
import InvestorForm from "@/components/InvestorForm"; // Adjust path as needed
import { dummyRequests } from "@/lib/investorData";

export default function InvestorRequests() {
  const [requests, setRequests] = useState(dummyRequests || []);
  const [processingId, setProcessingId] = useState(null);
  const [modalLoan, setModalLoan] = useState(null);

  const handleOpenModal = (loan) => setModalLoan(loan);
  const handleCloseModal = () => setModalLoan(null);

  const handleInvestorSubmit = ({ percent, amount }) => {
    setProcessingId(modalLoan.id);
    setModalLoan(null);

    setTimeout(() => {
      setRequests((prev) => {
        return prev
          .map((req) => {
            if (req.id !== modalLoan.id) return req;
            const funded = amount;
            const left = req.amount - funded;
            if (left <= 0) return null; // Fully funded, remove
            return { ...req, amount: left };
          })
          .filter(Boolean);
      });
      toast.success("Investment successful please!");
      setProcessingId(null);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Investment Opportunities
          </h1>
          <p className="text-lg text-gray-600">
            Browse and fund rental loan requests from vetted applicants.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {requests.map((request) => (
            <div
              key={request.id}
              className={`bg-white rounded-2xl shadow-lg flex flex-col relative transition-shadow duration-300 ${
                processingId === request.id
                  ? "opacity-60 pointer-events-none"
                  : "hover:shadow-2xl"
              }`}
            >
              {processingId === request.id && (
                <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10 rounded-2xl">
                  <svg
                    className="animate-spin h-8 w-8 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span className="ml-3 text-lg font-semibold text-indigo-700">
                    Processing...
                  </span>
                </div>
              )}
              <div className="relative">
                <img
                  src={request.listing.images[0]}
                  alt={request.listing.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  {request.listing.location}
                </span>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                  {request.listing.title}
                </h2>
                <p className="text-gray-500 mb-4">
                  <span className="font-medium">Applicant:</span>{" "}
                  {request.borrower.fullName}
                </p>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Amount Left</span>
                    <span className="font-bold text-green-700 text-lg">
                      GHS {request.amount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Term</span>
                    <span>{request.tenorMonths} months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Monthly Salary</span>
                    <span>GHS {request.salary.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Est. Monthly Payment</span>
                    <span>
                      GHS{" "}
                      {(request.amount / request.tenorMonths).toLocaleString(
                        undefined,
                        { maximumFractionDigits: 2 }
                      )}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenModal(request)}
                  disabled={processingId === request.id}
                  className="mt-auto bg-gradient-to-r from-indigo-600 to-teal-500 hover:from-indigo-700 hover:to-teal-600 text-white font-semibold py-2 rounded-xl shadow transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Fund This Loan
                </button>
              </div>
            </div>
          ))}

          {requests.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <svg
                className="h-16 w-16 text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No open loan requests
              </h3>
              <p className="text-gray-500">
                Check back later for new investment opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
      <SidePanelModal open={!!modalLoan} onClose={handleCloseModal}>
        {modalLoan && (
          <InvestorForm
            loan={modalLoan}
            onSubmit={handleInvestorSubmit}
            onCancel={handleCloseModal}
          />
        )}
      </SidePanelModal>
    </div>
  );
}
