import { Box } from "@mui/material";
import { ReactNode } from "react";

interface StepContainerProps {
  children: ReactNode;
  isActive: boolean;
}

export const StepContainer = ({ children, isActive }: StepContainerProps) => (
  <Box
    sx={{ display: "flex", flexDirection: "column", gap: 2, paddingBottom: 2 }}
  >
    {isActive ? children : null}
  </Box>
);
