import { Button } from "@mui/material";

interface AccountTypeSelectorProps {
  accountType: string;
  setAccountType: (type: string) => void;
  isMobile: boolean;
}

const accountTypes = [
  { value: "librarian", label: "As a Librarian" },
  { value: "author", label: "As an Author" },
  { value: "publisher", label: "As a Publisher" },
];

export const AccountTypeSelector = ({
  accountType,
  setAccountType,
  isMobile,
}: AccountTypeSelectorProps) => (
  <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
    {accountTypes.map((type) => (
      <Button
        key={type.value}
        onClick={() => setAccountType(type.value)}
        variant={accountType === type.value ? "contained" : "outlined"}
        sx={{
          width: "100%",
          borderRadius: "50px",
          py: isMobile ? 1 : 1.5,
          px: 2,
          fontSize: isMobile ? "0.75rem" : "0.875rem",
          fontWeight: "medium",
          textTransform: "none",
          boxShadow:
            accountType === type.value
              ? "0 4px 6px rgba(0, 0, 0, 0.1)"
              : "none",
          color: accountType === type.value ? "white" : "#28A745",
          backgroundColor:
            accountType === type.value ? "#28A745" : "transparent",
          borderColor: "#28A745",
          "&:hover": {
            backgroundColor:
              accountType === type.value
                ? "#218838"
                : "rgba(40, 167, 69, 0.08)",
            borderColor: "#28A745",
          },
        }}
      >
        {type.label}
      </Button>
    ))}
  </div>
);
