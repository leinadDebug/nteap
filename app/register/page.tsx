"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LibrarianRegistrationFlow } from "../components/auth/librarian-RegistrationFlow";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { AuthHeader } from "../components/Authheader";
import { AccountTypeSelector } from "../components/auth/accountTypeSelector";
import { FormField } from "../components/auth/formField";
import { CustomButton } from "../components/auth/customButton";

export default function RegisterPage() {
  const [accountType, setAccountType] = useState("librarian");
  const [showLibrarianFlow, setShowLibrarianFlow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    phone: phone,
  };

  function validate() {
    const newErrors: any = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      newErrors.email = "Invalid email address";
    if (!phone.trim()) newErrors.phone = "Phone is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (accountType === "librarian") {
        setShowLibrarianFlow(true);
      } else {
        router.push("/dashboard");
      }
    }, 1200);
  };

  if (showLibrarianFlow) {
    return <LibrarianRegistrationFlow {...userData} />;
  }

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <AuthHeader />

      {/* Main Content */}
      <div className="max-w-md sm:max-w-xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Title */}
        <div className="text-center mx-auto">
          <h2 className="text-3xl sm:text-4xl text-green-700 font-semibold mb-2">
            <span>Create an Account</span>
            <br />
            <span className="text-4xl sm:text-5xl">
              in <span className="font-bold text-green-600">NTEAP</span>
            </span>
          </h2>
        </div>

        {/* Registration Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="space-y-3 sm:space-y-4 mt-6 sm:mt-8"
        >
          {/* Account Type Selection */}
          <AccountTypeSelector
            accountType={accountType}
            setAccountType={setAccountType}
            isMobile={isMobile}
          />

          {/* Personal Information */}
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              isMobile={isMediumScreen}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <FormField
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              isMobile={isMediumScreen}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
            {/* Contact Information */}
            <FormField
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              isMobile={isMediumScreen}
              error={!!errors.email}
              helperText={errors.email}
              type="email"
            />
            <FormField
              label="Phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              isMobile={isMediumScreen}
              error={!!errors.phone}
              helperText={errors.phone}
              type="tel"
            />
            <FormField
              label="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              isMobile={isMediumScreen}
              error={!!errors.password}
              helperText={errors.password}
              type="password"
            />
            <FormField
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-type password"
              isMobile={isMediumScreen}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              type="password"
            />
          </Box>

          {/* Submit Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full mt-6 sm:mt-8">
            <CustomButton
              type="submit"
              isMobile={isMediumScreen}
              loading={loading}
              disabled={loading}
              sx={{ width: "100%" }}
            >
              Next
            </CustomButton>
            <CustomButton
              type="button"
              isMobile={isMediumScreen}
              onClick={handleGoogleLogin}
              sx={{
                width: "100%",
                backgroundColor: "#1E1E1E",
                "&:hover": { backgroundColor: "#121212" },
              }}
            >
              Continue with Google
            </CustomButton>
          </div>

          {/* Login Link */}
          <div className="text-center text-xs sm:text-sm pt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="./login">
                <span className="text-green-600 hover:text-green-700 font-medium cursor-pointer">
                  Login back
                </span>
              </Link>
            </p>
          </div>
        </Box>
      </div>
    </div>
  );
}
