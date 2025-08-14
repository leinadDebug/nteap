import { Box, Typography, Button } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import { AuthHeader } from "../Authheader";
import Link from "next/link";

export function SuccessPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FAFAFA" }}>
      <AuthHeader />

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: "md",
          mx: "auto",
          px: 3,
          py: 6,
          textAlign: "center",
          borderRadius: 2,
          bgcolor: "background.paper",
          mt: 5,
        }}
      >
        {/* Success Icon */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              width: 96,
              height: 96,
              backgroundColor: "#28A745",
              backgroundBlendMode: "color-burn",
              border: "#28A745",
              borderColor: "green",
              borderRadius: "50%",
              mx: "auto",
              mb: 3,
            }}
          >
            <div className="mb-8">
              <div className="w-24 h-24 bg-green-200 border-2 border-green-600  rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </Box>
        </Box>

        {/* Success Message */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#28A745",
          }}
        >
          Account Successfully Created!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            fontWeight: "medium",
            mb: 1,
          }}
        >
          Your librarian account has been set up successfully.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 4,
          }}
        >
          A confirmation email has been sent to your registered email address.
          <br />
          Please check your inbox (and spam folder) to verify your email.
        </Typography>

        {/* Action Button */}
        <Link href={"/"}>
          <Button
            sx={{
              backgroundColor: "#28A745",
              color: "white",
              py: isMobile ? 1 : 1.5,
              px: 4,
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "#218838",
              },
              fontSize: isMobile ? "0.875rem" : "1rem",
              fontWeight: "medium",
              textTransform: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "100%",
            }}
          >
            Proceed to Dashboard
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
