import Image from "next/image";
import img1 from "../../img/fd5312ef84376cde9193e736c26b68ff9582f7ca.png";
import img2 from "../../img/aaf595df9d2cd6403073adfc7b2c82b2b689bcff.png";
import img3 from "../../img/6025e1b890337a312d1fa3e92b9d1c30fa8e10e9.png";
import { Box } from "@mui/material";

interface IllustrationProps {
  step: number;
}

const illustrations = [
  { img: img1, alt: "University Building" },
  { img: img2, alt: "Map with Location Pin" },
  { img: img3, alt: "Person Avatar" },
];

export function Illustration({ step }: IllustrationProps) {
  const illustration = illustrations[step - 1];
  if (!illustration) return null;
  return (
    <Box sx={{ width: "100%", maxWidth: 400 }}>
      <Image
        src={illustration.img}
        alt={illustration.alt}
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );
}
