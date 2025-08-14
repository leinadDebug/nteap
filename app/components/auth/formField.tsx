import { Box, InputLabel, TextField } from "@mui/material";

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isMobile: boolean;
  fullWidth?: boolean;
  type?: string;
  error?: boolean;
  helperText?: string;
}

export const FormField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  isMobile,
  fullWidth = true,
  type = "text",
  error = false,
  helperText = "",
}: FormFieldProps) => {
  const textFieldStyles = {
    "& .MuiFilledInput-root": {
      backgroundColor: "white",
      borderRadius: "4px",
      border: "1px solid #D1D5DB",
      "&:hover": {
        backgroundColor: "white",
        borderColor: "#28A745",
      },
      "&.Mui-focused": {
        backgroundColor: "white",
        borderColor: "#28A745",
      },
    },
    "& .MuiFilledInput-input": {
      padding: isMobile ? "12px 12px" : "16px 12px",
    },
  };

  return (
    <Box>
      <InputLabel sx={{ fontSize: isMobile ? "0.875rem" : "1rem", mb: 1 }}>
        {label}
      </InputLabel>
      <TextField
        fullWidth={fullWidth}
        variant="filled"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={textFieldStyles}
        size={isMobile ? "small" : "medium"}
        type={type}
        error={error}
        helperText={helperText}
      />
    </Box>
  );
};
