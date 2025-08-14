import { Typography } from "@mui/material";
import { ProfileImageUpload } from "./profileUploadImage";
import { InterestsSelector } from "./interestSelector";
import { CustomButton } from "./customButton";
import { ProfileStepProps } from "@/app/types/user";

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

export function ProfileStep({
  selectedInterests,
  interestError,
  toggleInterest,
  isMobile,
  loading,
  onComplete,
  children,
}: ProfileStepProps) {
  return (
    <>
      <ProfileImageUpload isMobile={isMobile} />
      <InterestsSelector
        interests={interests}
        selectedInterests={selectedInterests}
        toggleInterest={toggleInterest}
        isMobile={isMobile}
      />
      {interestError && (
        <Typography color="error" sx={{ mt: 1, fontSize: "0.95rem" }}>
          {interestError}
        </Typography>
      )}
      {children}
      <CustomButton
        onClick={onComplete}
        isMobile={isMobile}
        loading={loading}
        disabled={loading}
      >
        Complete Registration
      </CustomButton>
    </>
  );
}
