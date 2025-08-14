import { useState } from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";

import { StepIndicator } from "./stepIndicator";
import { StepContainer } from "./stepContainer";
import { AcademicDetailsStep } from "./AcademicDetailsStep";
import { LocationStep } from "./LocationStep";
import { ProfileStep } from "./ProfileStep";
import { SuccessPage } from "./success";
import { AuthHeader } from "../Authheader";
import { Illustration } from "./Illustration";
import { validateStep } from "@/app/lib/validation";
import { FormData, UserData } from "@/app/types/user";

export function LibrarianRegistrationFlow({ ...userData }: UserData) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    university: "",
    faculty: "",
    department: "",
    levelOfStudy: "",
    country: "",
    state: "",
    city: "",
    streetAddress: "",
    ...userData,
  });
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [interestError, setInterestError] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    setErrors((prev: any) => ({ ...prev, [name]: undefined }));
  };

  const interests = [
    "Mathematics",
    "Accounting",
    "Biology",
    "English Language",
    "Physics",
    "Chemistry",
    "History",
    "Geography",
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
    setInterestError("");
  };

  function handleContinue(step: number) {
    const { errors: validationErrors, interestError: interestErr } =
      validateStep(step, formData, selectedInterests);
    setErrors(validationErrors);
    setInterestError(interestErr);
    if (Object.keys(validationErrors).length > 0 || interestErr) return;
    setCurrentStep(step + 1);
  }

  function handleCompleteRegistration() {
    const { errors: validationErrors, interestError: interestErr } =
      validateStep(3, formData, selectedInterests);
    setErrors(validationErrors);
    setInterestError(interestErr);
    if (Object.keys(validationErrors).length > 0 || interestErr) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 1200);
  }

  if (showSuccess) {
    return <SuccessPage />;
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.paper" }}>
      {/* Header */}
      <AuthHeader />

      {/* Main Content */}
      <Box sx={{ maxWidth: "lg", mx: "auto", px: 3, py: 6 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: 4,
          }}
        >
          {/* Left Column - Form */}
          <Box>
            {/* Greeting */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: "#28A745",
                }}
              >
                <span style={{ color: "#23903c", fontStyle: "italic" }}>
                  Hi,{" "}
                </span>
                Manny
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Continue your account creation{" "}
                <span style={{ color: "#28A745" }}>As a Librarian</span> by
                filling the form below
              </Typography>
            </Box>

            {/* Progress Steps */}
            <Box sx={{ mb: 4 }}>
              <StepIndicator
                stepNumber={1}
                currentStep={currentStep}
                label="Academic Details"
              />
              <StepContainer isActive={currentStep === 1}>
                <AcademicDetailsStep
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                  isMobile={isMobile}
                  onContinue={() => handleContinue(1)}
                />
              </StepContainer>

              {/* Step 2 */}
              <StepIndicator
                stepNumber={2}
                currentStep={currentStep}
                label="Location"
              />
              <StepContainer isActive={currentStep === 2}>
                <LocationStep
                  formData={formData}
                  errors={errors}
                  handleChange={handleChange}
                  isMobile={isMobile}
                  onContinue={() => handleContinue(2)}
                />
              </StepContainer>

              {/* Step 3 */}
              <StepIndicator
                stepNumber={3}
                currentStep={currentStep}
                label="Profile"
              />
              <StepContainer isActive={currentStep === 3}>
                <ProfileStep
                  selectedInterests={selectedInterests}
                  interestError={interestError}
                  toggleInterest={toggleInterest}
                  isMobile={isMobile}
                  loading={loading}
                  onComplete={handleCompleteRegistration}
                />
              </StepContainer>
            </Box>
          </Box>

          {/* Right Column - Illustration */}
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: { xs: "none", lg: "flex" },
            }}
          >
            <Illustration step={currentStep} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
