// "use client";

// import { useState } from "react";
// import { useRouter, useParams } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loanSchema } from "@/lib/schema";
// import toast from "react-hot-toast";
// import Image from "next/image";

// export default function ApplyPage() {
//   const router = useRouter();
//   const { listingId } = useParams();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [idCardPreview, setIdCardPreview] = useState(null);
//   const [photoPreview, setPhotoPreview] = useState(null);
//   const [step, setStep] = useState(1); // For multi-step form

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loanSchema),
//     defaultValues: {
//       employmentType: "FULL_TIME",
//       employmentSector: "PRIVATE",
//     },
//   });

//   const logFormData = (data) => {
//     console.log("Form Data:", data);
//     console.log("Errors:", errors);
//     console.log("ListingId:", listingId);
//   };

//   const handleFileChange = (e, setPreview) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const onSubmit = async (data) => {
//     console.log("Form Data:", data);
//     setIsSubmitting(true);
//     if (step !== 3) {
//       return;
//     }

//     // Create FormData to handle file uploads
//     const formData = new FormData();

//     // Add all form data
//     Object.keys(data).forEach((key) => {
//       formData.append(key, data[key]);
//     });

//     try {
//       // Simulate API call with timeout
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       // Log the form data (for demonstration)
//       console.log("Form Data:", {
//         ...data,
//         listingId,
//         idCard: idCardPreview ? "Uploaded" : "Not uploaded",
//         photo: photoPreview ? "Uploaded" : "Not uploaded",
//       });

//       // Show success message
//       toast.success("Application submitted successfully!", {
//         duration: 5000,
//         position: "top-center",
//       });

//       // Redirect after a short delay
//       setTimeout(() => {
//         router.push("/marketplace");
//       }, 2000);
//     } catch (error) {
//       console.error("Submission error:", error);
//       toast.error("Failed to submit application. Please try again.", {
//         duration: 5000,
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Add this function to validate before moving to next step
//   const handleNextStep = () => {
//     if (step === 1) {
//       const personalFields = [
//         "fullName",
//         "email",
//         "phone",
//         "dateOfBirth",
//         "nationalId",
//         "address",
//       ];
//       let isValid = true;

//       personalFields.forEach((field) => {
//         if (!watch(field)) {
//           toast.error(
//             `Please fill in your ${field
//               .replace(/([A-Z])/g, " $1")
//               .toLowerCase()}`
//           );
//           isValid = false;
//         }
//       });

//       if (isValid) setStep(2);
//     } else if (step === 2) {
//       const financialFields = [
//         "employmentType",
//         "employmentSector",
//         "employerName",
//         "salary",
//         "amount",
//         "tenor",
//       ];
//       let isValid = true;

//       financialFields.forEach((field) => {
//         if (!watch(field)) {
//           toast.error(
//             `Please fill in your ${field
//               .replace(/([A-Z])/g, " $1")
//               .toLowerCase()}`
//           );
//           isValid = false;
//         }
//       });

//       if (isValid) setStep(3);
//     }
//   };
//   const FormStep = ({ stepNumber, title, children }) => (
//     <div className={step === stepNumber ? "block" : "hidden"}>
//       <h2 className="text-xl font-semibold mb-6">{title}</h2>
//       <div className="space-y-6">{children}</div>
//     </div>
//   );

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Loan Application</h1>
//         <p className="mt-2 text-gray-600">
//           Please fill out all required information to process your loan
//           application.
//         </p>
//       </div>

//       {/* Progress Steps */}
//       <div className="mb-8">
//         <div className="flex items-center justify-between">
//           {[1, 2, 3].map((number) => (
//             <div
//               key={number}
//               className={`flex items-center ${number < 3 ? "flex-1" : ""}`}
//             >
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                   step >= number
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-200 text-gray-600"
//                 }`}
//               >
//                 {number}
//               </div>
//               {number < 3 && (
//                 <div
//                   className={`flex-1 h-1 mx-4 ${
//                     step > number ? "bg-indigo-600" : "bg-gray-200"
//                   }`}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between mt-2">
//           <span className="text-sm">Personal Info</span>
//           <span className="text-sm">Employment</span>
//           <span className="text-sm">Verification</span>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
//         <FormStep stepNumber={1} title="Personal Information">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 {...register("fullName")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               {errors.fullName && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {errors.fullName.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 {...register("email")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               {errors.email && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Phone
//               </label>
//               <input
//                 {...register("phone")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//               {errors.phone && (
//                 <p className="mt-1 text-sm text-red-600">
//                   {errors.phone.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Date of Birth
//               </label>
//               <input
//                 type="date"
//                 {...register("dateOfBirth")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 National ID Type
//               </label>
//               <select
//                 {...register("nationalType")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               >
//                 {" "}
//                 <option value="Ghana Card">Ghana Card</option>
//                 <option value="Passport">Passport</option>
//                 <option value="Driver's License">Driver's License</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 National ID Number
//               </label>
//               <input
//                 {...register("nationalId")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Current Address
//               </label>
//               <input
//                 {...register("address")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>
//           </div>
//         </FormStep>

//         <FormStep stepNumber={2} title="Employment & Financial Information">
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Employment Type
//               </label>
//               <select
//                 {...register("employmentType")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               >
//                 <option value="FULL_TIME">Full Time</option>
//                 <option value="PART_TIME">Part Time</option>
//                 <option value="SELF_EMPLOYED">Self Employed</option>
//                 <option value="CONTRACT">Contract</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Employment Sector
//               </label>
//               <select
//                 {...register("employmentSector")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               >
//                 <option value="PRIVATE">Private Sector</option>
//                 <option value="PUBLIC">Public Sector</option>
//                 <option value="NGO">NGO</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Employer Name
//               </label>
//               <input
//                 {...register("employerName")}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Monthly Salary (GHS)
//               </label>
//               <input
//                 type="number"
//                 {...register("salary", { valueAsNumber: true })}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Loan Amount (GHS)
//               </label>
//               <input
//                 type="number"
//                 {...register("amount", { valueAsNumber: true })}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Loan Term (Months)
//               </label>
//               <select
//                 {...register("tenor", { valueAsNumber: true })}
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               >
//                 {[6, 12, 18, 24, 36, 48, 60].map((months) => (
//                   <option key={months} value={months}>
//                     {months} months
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </FormStep>

//         <FormStep stepNumber={3} title="Document Upload & Verification">
//           <div className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Upload ID Card
//               </label>
//               <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                 <div className="space-y-1 text-center">
//                   {idCardPreview ? (
//                     <img
//                       src={idCardPreview}
//                       alt="ID Card Preview"
//                       className="mx-auto h-32 w-auto"
//                     />
//                   ) : (
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                     >
//                       <path
//                         d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   )}
//                   <div className="flex text-sm text-gray-600">
//                     <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
//                       <span>Upload a file</span>
//                       <input
//                         type="file"
//                         className="sr-only"
//                         onChange={(e) => handleFileChange(e, setIdCardPreview)}
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs text-gray-500">
//                     PNG, JPG, GIF up to 10MB
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Upload Recent Photo
//               </label>
//               <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                 <div className="space-y-1 text-center">
//                   {photoPreview ? (
//                     <img
//                       src={photoPreview}
//                       alt="Photo Preview"
//                       className="mx-auto h-32 w-auto"
//                     />
//                   ) : (
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                     >
//                       <path
//                         d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   )}
//                   <div className="flex text-sm text-gray-600">
//                     <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
//                       <span>Upload a file</span>
//                       <input
//                         type="file"
//                         className="sr-only"
//                         onChange={(e) => handleFileChange(e, setPhotoPreview)}
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs text-gray-500">
//                     PNG, JPG, GIF up to 10MB
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </FormStep>

//         <div className="flex justify-between pt-6">
//           {step > 1 && (
//             <button
//               type="button"
//               onClick={() => setStep(step - 1)}
//               className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               Previous
//             </button>
//           )}

//           {step < 3 ? (
//             <button
//               type="button"
//               onClick={handleNextStep}
//               className="ml-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//               disabled={isSubmitting}
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="ml-auto inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
//             >
//               {isSubmitting ? (
//                 <>
//                   <svg
//                     className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     />
//                   </svg>
//                   Processing...
//                 </>
//               ) : (
//                 "Submit Application"
//               )}
//             </button>
//           )}
//         </div>
//       </form>
//       {isSubmitting && (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
//             <div className="flex flex-col items-center">
//               <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 Submitting Your Application
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Please wait while we process your application. This may take a
//                 few moments.
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// app/apply/page.js
"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loanSchema } from "@/lib/schema";
import toast from "react-hot-toast";
import Image from "next/image";

export default function ApplyPage() {
  const router = useRouter();
  const { listingId } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [idCardPreview, setIdCardPreview] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loanSchema),
    defaultValues: {
      employmentType: "FULL_TIME",
      employmentSector: "PRIVATE",
      tenor: 12,
    },
  });

  const handleFileChange = (e, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size should be less than 10MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateStep = async (currentStep) => {
    let fieldsToValidate = [];

    switch (currentStep) {
      case 1:
        fieldsToValidate = [
          "fullName",
          "email",
          "phone",
          "dateOfBirth",
          "nationalType",
          "nationalId",
          "address",
        ];
        break;
      case 2:
        fieldsToValidate = [
          "employmentType",
          "employmentSector",
          "employerName",
          "salary",
          "amount",
          "tenor",
        ];
        break;
      default:
        return true;
    }

    const result = await trigger(fieldsToValidate);
    if (!result) {
      toast.error("Please fill all required fields correctly");
    }
    return result;
  };

  const handleNextStep = async () => {
    const isValid = await validateStep(step);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data) => {
    if (step !== 3) return;

    if (!idCardPreview || !photoPreview) {
      toast.error("Please upload both ID Card and Recent Photo");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for file uploads
      const formData = new FormData();

      // Add form data
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      // Add files
      formData.append("idCard", idCardPreview);
      formData.append("photo", photoPreview);
      formData.append("listingId", listingId);

      // Log form data for demonstration
      console.log("Submitting Form Data:", {
        ...data,
        listingId,
        idCard: "Uploaded",
        photo: "Uploaded",
      });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Application submitted successfully!");

      // Redirect after success
      setTimeout(() => {
        router.push("/marketplace");
      }, 1500);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }; // FormStep component for better organization
  const FormStep = ({ stepNumber, title, children }) => (
    <div className={step === stepNumber ? "block" : "hidden"}>
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      <div className="space-y-6">{children}</div>
    </div>
  );

  // Input field component for reusability
  const InputField = ({ label, error, ...props }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );

  // Select field component for reusability
  const SelectField = ({ label, options, error, ...props }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-lg p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Loan Application</h1>
          <p className="mt-2 text-gray-600">
            Please fill out all required information to process your loan
            application.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: "Personal Info" },
              { step: 2, label: "Employment" },
              { step: 3, label: "Verification" },
            ].map((item) => (
              <div
                key={item.step}
                className={`flex items-center ${item.step < 3 ? "flex-1" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= item.step
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.step}
                </div>
                {item.step < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step > item.step ? "bg-indigo-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm">Personal Info</span>
            <span className="text-sm">Employment</span>
            <span className="text-sm">Verification</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          {/* Step 1: Personal Information */}
          <FormStep stepNumber={1} title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                {...register("fullName")}
                error={errors.fullName?.message}
              />
              <InputField
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email?.message}
              />
              <InputField
                label="Phone"
                {...register("phone")}
                error={errors.phone?.message}
              />
              <InputField
                label="Date of Birth"
                type="date"
                {...register("dateOfBirth")}
                error={errors.dateOfBirth?.message}
              />
              <SelectField
                label="National ID Type"
                {...register("nationalType")}
                options={[
                  { value: "Ghana Card", label: "Ghana Card" },
                  { value: "Passport", label: "Passport" },
                  { value: "Driver's License", label: "Driver's License" },
                ]}
                error={errors.nationalType?.message}
              />
              <InputField
                label="National ID Number"
                {...register("nationalId")}
                error={errors.nationalId?.message}
              />
              <div className="md:col-span-2">
                <InputField
                  label="Current Address"
                  {...register("address")}
                  error={errors.address?.message}
                />
              </div>
            </div>
          </FormStep>

          {/* Step 2: Employment Information */}
          <FormStep stepNumber={2} title="Employment & Financial Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField
                label="Employment Type"
                {...register("employmentType")}
                options={[
                  { value: "FULL_TIME", label: "Full Time" },
                  { value: "PART_TIME", label: "Part Time" },
                  { value: "SELF_EMPLOYED", label: "Self Employed" },
                  { value: "CONTRACT", label: "Contract" },
                ]}
                error={errors.employmentType?.message}
              />
              <SelectField
                label="Employment Sector"
                {...register("employmentSector")}
                options={[
                  { value: "PRIVATE", label: "Private Sector" },
                  { value: "PUBLIC", label: "Public Sector" },
                  { value: "NGO", label: "NGO" },
                ]}
                error={errors.employmentSector?.message}
              />
              <InputField
                label="Employer Name"
                {...register("employerName")}
                error={errors.employerName?.message}
              />
              <InputField
                label="Monthly Salary (GHS)"
                type="number"
                {...register("salary", { valueAsNumber: true })}
                error={errors.salary?.message}
              />
              <InputField
                label="Loan Amount (GHS)"
                type="number"
                {...register("amount", { valueAsNumber: true })}
                error={errors.amount?.message}
              />
              <SelectField
                label="Loan Term (Months)"
                {...register("tenor", { valueAsNumber: true })}
                options={[6, 12, 18, 24, 36, 48, 60].map((months) => ({
                  value: months,
                  label: `${months} months`,
                }))}
                error={errors.tenor?.message}
              />
            </div>
          </FormStep>

          {/* Step 3: Document Upload */}
          {/* Step 3: Document Upload */}
          <FormStep stepNumber={3} title="Document Upload & Verification">
            <div className="space-y-8">
              {/* ID Card Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload ID Card *
                </label>
                <div
                  className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${
                    !idCardPreview ? "border-dashed" : "border-solid"
                  } rounded-md ${
                    !idCardPreview ? "border-gray-300" : "border-indigo-600"
                  }`}
                >
                  <div className="space-y-1 text-center">
                    {idCardPreview ? (
                      <div className="relative">
                        <img
                          src={idCardPreview}
                          alt="ID Card Preview"
                          className="mx-auto h-48 w-auto rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => setIdCardPreview(null)}
                          className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <>
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload ID Card</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  if (file.size > 10 * 1024 * 1024) {
                                    toast.error(
                                      "File size should be less than 10MB"
                                    );
                                    return;
                                  }
                                  if (!file.type.startsWith("image/")) {
                                    toast.error("Please upload an image file");
                                    return;
                                  }
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setIdCardPreview(reader.result);
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Recent Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Recent Photo *
                </label>
                <div
                  className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${
                    !photoPreview ? "border-dashed" : "border-solid"
                  } rounded-md ${
                    !photoPreview ? "border-gray-300" : "border-indigo-600"
                  }`}
                >
                  <div className="space-y-1 text-center">
                    {photoPreview ? (
                      <div className="relative">
                        <img
                          src={photoPreview}
                          alt="Recent Photo Preview"
                          className="mx-auto h-48 w-auto rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => setPhotoPreview(null)}
                          className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <>
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload Recent Photo</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                  if (file.size > 10 * 1024 * 1024) {
                                    toast.error(
                                      "File size should be less than 10MB"
                                    );
                                    return;
                                  }
                                  if (!file.type.startsWith("image/")) {
                                    toast.error("Please upload an image file");
                                    return;
                                  }
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    setPhotoPreview(reader.result);
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Upload Requirements */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Document Requirements:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Valid government-issued ID card (Ghana Card, Passport, or
                    Driver's License)
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Recent photo taken within the last 6 months
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Clear, readable images in PNG or JPG format
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    File size should not exceed 10MB
                  </li>
                </ul>
              </div>

              {/* Submit Button - This can be part of the main form navigation */}
              {/* <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !idCardPreview || !photoPreview}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
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
                      Processing...
                    </div>
                  ) : (
                    "Submit Application"
                  )}
                </button>
                {(!idCardPreview || !photoPreview) && (
                  <p className="mt-2 text-sm text-red-600 text-center">
                    Please upload both ID Card and Recent Photo to continue
                  </p>
                )}
              </div> */}
            </div>
          </FormStep>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePreviousStep}
                disabled={isSubmitting}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                disabled={isSubmitting}
                className="ml-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
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
                    Processing...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            )}
          </div>
        </form>

        {/* Loading Overlay */}
        {isSubmitting && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Submitting Your Application
                </h3>
                <p className="text-gray-600 text-center">
                  Please wait while we process your application. This may take a
                  few moments.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
