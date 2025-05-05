// lib/schema.js
import * as z from "zod";

export const loanSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  nationalType: z.enum(["Passport", "Driver's License", "Ghana Card"]),
  nationalId: z.string().min(1, "National ID is required"),
  address: z.string().min(1, "Address is required"),
  employmentType: z.enum([
    "FULL_TIME",
    "PART_TIME",
    "SELF_EMPLOYED",
    "CONTRACT",
  ]),
  employmentSector: z.enum(["PRIVATE", "PUBLIC", "NGO"]),
  employerName: z.string().min(1, "Employer name is required"),
  salary: z.number().positive("Salary must be a positive number"),
  amount: z.number().positive("Loan amount must be a positive number"),
  tenor: z.number().min(6).max(60, "Tenor must be between 6 and 60 months"),
});
