"use client";

import {
  Button,
  IconButton,
  Input,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search, X, SlidersHorizontalIcon } from "lucide-react";

export function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <header className="bg-gray-50 border-b px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Left section - Search and Menu */}
        <div className="flex items-center flex-1 max-w-2xl">
          <div className="relative flex-1 min-w-[120px]">
            {!isSmallScreen && (
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 w-4 h-4" />
            )}
            <Input
              placeholder="Search..."
              className={`${
                !isSmallScreen ? "pl-10" : "pl-3"
              } pr-10 p-2 rounded-full bg-gray-200 w-full`}
              // size={isSmallScreen ? "small" : "medium"}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 flex items-center gap-2 cursor-pointer">
              <X className={`${isSmallScreen ? "hidden" : ""} w-4 h-4`} />
              <IconButton
                className="ml-2 bg-green-500 hover:bg-green-600 text-white"
                size={isSmallScreen ? "small" : "medium"}
                color="success"
                aria-label="filter"
              >
                <SlidersHorizontalIcon className="w-4 h-4 text-green-500 bg-transparent" />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Right section - Auth buttons */}
        <div className="flex gap-1 sm:gap-2">
          {!isSmallScreen ? (
            <>
              <Button
                variant="outlined"
                size={isMediumScreen ? "small" : "medium"}
                sx={{
                  backgroundColor: "#1E7D32",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgb(22 163 74)",
                  },
                }}
              >
                Sign up
              </Button>
              <Button
                size={isMediumScreen ? "small" : "medium"}
                sx={{
                  backgroundColor: "#28A745",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgb(22 163 74)",
                  },
                }}
              >
                Sign in
              </Button>
            </>
          ) : (
            <>
              <Button
                size="small"
                sx={{
                  backgroundColor: "rgb(34 197 94)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgb(22 163 74)",
                  },
                }}
              >
                Login
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
