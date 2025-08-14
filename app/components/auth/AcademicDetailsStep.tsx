import { Box } from "@mui/material";
import { FormField } from "./formField";
import { CustomButton } from "./customButton";
import { AcademicDetailsStepProps } from "@/app/types/user";

export function AcademicDetailsStep({
  formData,
  errors,
  handleChange,
  isMobile,
  onContinue,
}: AcademicDetailsStepProps) {
  return (
    <>
      <FormField
        label="University / Institution Name"
        name="university"
        value={formData.university}
        onChange={handleChange}
        placeholder="Enter your University / Institution Name"
        isMobile={isMobile}
        error={!!errors.university}
        helperText={errors.university}
      />
      <Box sx={{ display: isMobile ? "" : "flex", gap: "1rem", width: "100%" }}>
        <FormField
          label="Faculty"
          name="faculty"
          value={formData.faculty}
          onChange={handleChange}
          placeholder="Enter your Faculty"
          isMobile={isMobile}
          error={!!errors.faculty}
          helperText={errors.faculty}
        />
        <FormField
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Enter your Department"
          isMobile={isMobile}
          error={!!errors.department}
          helperText={errors.department}
        />
      </Box>
      <FormField
        label="Level of Study"
        name="levelOfStudy"
        value={formData.levelOfStudy}
        onChange={handleChange}
        placeholder="Enter your level of study"
        isMobile={isMobile}
        error={!!errors.levelOfStudy}
        helperText={errors.levelOfStudy}
      />
      <CustomButton onClick={onContinue} isMobile={isMobile}>
        Continue to Location
      </CustomButton>
    </>
  );
}
