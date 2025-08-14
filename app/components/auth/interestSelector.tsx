import { Box, Typography, Chip } from "@mui/material";

interface InterestsSelectorProps {
  interests: string[];
  selectedInterests: string[];
  toggleInterest: (interest: string) => void;
  isMobile: boolean;
}

export const InterestsSelector = ({
  interests,
  selectedInterests,
  toggleInterest,
  isMobile,
}: InterestsSelectorProps) => (
  <Box>
    <Typography
      variant="subtitle1"
      sx={{ fontWeight: "medium", mb: 1, color: "black" }}
    >
      Interests
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
      Select two or more areas of subjects of your studies
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        p: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        bgcolor: "background.paper",
      }}
    >
      {interests.map((interest) => (
        <Chip
          key={interest}
          label={interest}
          onClick={() => toggleInterest(interest)}
          color={selectedInterests.includes(interest) ? "success" : "default"}
          sx={{
            borderRadius: "50px",
            fontSize: isMobile ? "0.75rem" : "0.875rem",
          }}
        />
      ))}
    </Box>
  </Box>
);
