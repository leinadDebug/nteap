import { Box, Typography } from "@mui/material";

export const ProfileImageUpload = ({ isMobile }: { isMobile: boolean }) => (
  <Box>
    <Typography
      variant="subtitle1"
      sx={{ fontWeight: "medium", mb: 1, color: "black" }}
    >
      Public Profile
    </Typography>
    <Box sx={{ display: isMobile ? "" : "flex" }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Add an image of yourself. <br />
        This will be displayed on your profile.
      </Typography>
      <Box
        sx={{
          width: 96,
          height: 96,
          bgcolor: "#A6D7A86B",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px dashed",
          borderColor: "background.paper",
          boxShadow: 3,
          cursor: "pointer",
        }}
      >
        <CameraIcon />
      </Box>
    </Box>
  </Box>
);

const CameraIcon = () => (
  <svg
    className="w-8 h-8 text-slate-500 opacity-35"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
