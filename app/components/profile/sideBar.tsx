"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HelpCircle, Menu, ChevronRight, ChevronDown } from "lucide-react";
import {
  IconButton,
  Box,
  Typography,
  List,
  styled,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { MenuItem } from "./MenuItem";
import { mainMenuItems, yoursMenuItems } from "./menu-items";

interface SidebarProps {
  className?: string;
  activeItemId?: string;
}

const SidebarContainer = styled(Box)({
  background: "linear-gradient(to bottom, #16a34a, #15803d)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  height: "fit",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1)",
});

export function Sidebar({ className, activeItemId }: SidebarProps) {
  const router = useRouter();
  const [isYoursExpanded, setIsYoursExpanded] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(activeItemId || "faqs");

  const toggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const handleNavigation = useCallback(
    (id: string, route: string) => {
      setActiveItem(id);
      router.push(route);
    },
    [router]
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  return (
    <SidebarContainer
      className={className}
      sx={{ width: isCollapsed ? "80px" : "200px" }}
    >
      <Box sx={{ py: 2, flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 4,
            pt: 5,
            pl: isCollapsed ? 0 : 3.5,
            justifyContent: isCollapsed ? "center" : "flex-start",
          }}
        >
          <IconButton
            onClick={toggleSidebar}
            sx={{
              color: "white",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <Menu className="w-5 h-5 transform duration-300" />
          </IconButton>
          {!isCollapsed && (
            <Typography variant="h6" fontWeight="bold">
              NTEAP
            </Typography>
          )}
        </Box>

        {/* Main Navigation */}
        <Box
          component="nav"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            py: 2,
          }}
        >
          <List sx={{ "& > * + *": { mt: 1 } }}>
            {mainMenuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                isCollapsed={isCollapsed}
                onClick={handleNavigation}
              />
            ))}
          </List>

          {/* Yours Section */}
          <Box sx={{ pt: 2 }}>
            {!isCollapsed && (
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  pl: 3,
                  mb: 1,
                  display: "block",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Your Account
              </Typography>
            )}
            <Box
              onClick={() => setIsYoursExpanded((prev) => !prev)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: isCollapsed ? "center" : "space-between",
                p: 1.5,
                mx: isCollapsed ? 1 : 2,
                borderRadius: 1.5,
                cursor: "pointer",
                backgroundColor: "rgba(34, 197, 94, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(34, 197, 94, 0.75)",
                },
                transition: "background-color 300ms ease-in-out",
              }}
            >
              <HelpCircle style={{ width: 20, height: 20, color: "#81C784" }} />
              {!isCollapsed && (
                <>
                  <Typography noWrap sx={{ color: "white", ml: 1.5, flex: 1 }}>
                    Yours
                  </Typography>
                  <Box sx={{ transition: "transform 300ms" }}>
                    {isYoursExpanded ? (
                      <ChevronDown
                        style={{ width: 16, height: 16, color: "#A5D6A7" }}
                      />
                    ) : (
                      <ChevronRight
                        style={{ width: 16, height: 16, color: "#A5D6A7" }}
                      />
                    )}
                  </Box>
                </>
              )}
            </Box>

            {/* Submenu */}
            <Collapse in={isYoursExpanded} timeout="auto" unmountOnExit>
              <Box sx={{ "& > * + *": { mt: 1 }, pt: 1, mx: 1 }}>
                {yoursMenuItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    isActive={activeItem === item.id}
                    isCollapsed={isCollapsed}
                    onClick={handleNavigation}
                  />
                ))}
              </Box>
            </Collapse>
          </Box>
        </Box>
      </Box>
    </SidebarContainer>
  );
}
