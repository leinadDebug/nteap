import { Typography, Box } from "@mui/material";
import Link from "next/link";

export function AuthHeader() {
  return (
    <Box sx={{ p: 3, boxShadow: 1 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#28A745" }}>
        <Link href={"/"}>NTEAP</Link>
      </Typography>
    </Box>
  );
}
