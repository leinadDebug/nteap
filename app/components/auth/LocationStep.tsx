import { Box } from "@mui/material";
import { FormField } from "./formField";
import { CustomButton } from "./customButton";
import { LocationStepProps } from "@/app/types/user";

export function LocationStep({
  formData,
  errors,
  handleChange,
  isMobile,
  onContinue,
}: LocationStepProps) {
  return (
    <>
      <FormField
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Select your Nationality"
        isMobile={isMobile}
        error={!!errors.country}
        helperText={errors.country}
      />
      <Box sx={{ display: isMobile ? "" : "flex", gap: "1rem", width: "100%" }}>
        <FormField
          label="State/ Province"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Select your state"
          isMobile={isMobile}
          error={!!errors.state}
          helperText={errors.state}
        />
        <FormField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Select your city"
          isMobile={isMobile}
          error={!!errors.city}
          helperText={errors.city}
        />
      </Box>
      <FormField
        label="Street Address"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleChange}
        placeholder="Enter your Nationality"
        isMobile={isMobile}
        error={!!errors.streetAddress}
        helperText={errors.streetAddress}
      />
      <CustomButton onClick={onContinue} isMobile={isMobile}>
        Continue to Profile
      </CustomButton>
    </>
  );
}
