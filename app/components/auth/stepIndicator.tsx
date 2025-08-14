import { Box, Typography } from "@mui/material";

interface StepIndicatorProps {
  stepNumber: number;
  currentStep: number;
  label: string;
}

export function StepIndicator({
  stepNumber,
  currentStep,
  label,
}: StepIndicatorProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: currentStep >= stepNumber ? "#28A745" : "grey.300",
          color: "white",
          fontSize: "0.75rem",
        }}
      >
        {currentStep > stepNumber ? <CheckIcon /> : stepNumber}
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "medium",
          color:
            currentStep === stepNumber
              ? "#28A745"
              : currentStep > stepNumber
              ? "text.primary"
              : "text.disabled",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
