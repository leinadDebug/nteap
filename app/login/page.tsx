"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { AuthHeader } from "../components/Authheader";
import { FormField } from "../components/auth/formField";
import { CustomButton } from "../components/auth/customButton";
import { UserData } from "../types/user";
import { validateLogin } from "../lib/validation";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState<
    Pick<UserData, "email" | "password">
  >({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateLogin(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/");
      // handle login logic here
    }, 1200);
  };

  const handleGoogleLogin = () => {
    // handle Google login
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
            <span>Welcome back</span>
            <br />
            <span className="text-4xl sm:text-5xl">
              to <span className="font-bold text-green-600">NTEAP</span>
            </span>
          </h2>
        </div>

        {/* Registration Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="space-y-3 sm:space-y-4 mt-6 sm:mt-8"
        >
          <FormField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            isMobile={isMobile}
            error={!!errors.email}
            helperText={errors.email}
            type="email"
          />
          <FormField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            isMobile={isMobile}
            error={!!errors.password}
            helperText={errors.password}
            type="password"
          />
          <div className="float-right">
            <Link
              href="#"
              color="inherit"
              className={`${
                isMobile ? "text-[0.75rem]" : "text-[0.85rem]"
              } text-black underline`}
            >
              Forget password?
            </Link>
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full mt-6 sm:mt-8">
            <CustomButton
              type="submit"
              isMobile={isMobile}
              loading={loading}
              disabled={loading}
              sx={{ width: "100%" }}
            >
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              isMobile={isMobile}
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
          <div className="text-center pt-2 sm:pt-6">
            <p className="text-gray-600 text-xs sm:text-sm">
              Don't have an account?{" "}
              <Link
                href="./register"
                color="inherit"
                className={`${
                  isMobile ? "text-[0.75rem]" : "text-[0.85rem]"
                } text-[#28A745] hover:text-[#218838] font-normal no-underline`}
              >
                Sign up now
              </Link>
            </p>
          </div>
        </Box>
      </div>
    </div>
  );
}
