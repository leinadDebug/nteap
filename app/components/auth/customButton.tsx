import { Button } from "@mui/material";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isMobile: boolean;
  sx?: object;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}

export function CustomButton({
  children,
  onClick,
  isMobile,
  sx = {},
  type = "button",
  disabled = false,
  loading = false,
}: CustomButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
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
        mt: 2,
        alignSelf: "flex-start",
        ...sx,
      }}
    >
      {loading ? "Loading..." : children}
    </Button>
  );
}
