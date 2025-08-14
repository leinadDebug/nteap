import { IconButton } from "@mui/material";
import { MenuItemData } from "./menu-items";

interface MenuItemProps {
  item: MenuItemData;
  isActive: boolean;
  isCollapsed: boolean;
  onClick: (id: string, route: string) => void;
}

export function MenuItem({
  item,
  isActive,
  isCollapsed,
  onClick,
}: MenuItemProps) {
  const itemClasses = [
    "p-1",
    "cursor-pointer",
    "transition-all",
    "duration-300",
    "ease-in-out",
    isCollapsed
      ? "mx-auto w-full justify-center flex"
      : "pl-7 w-full flex items-center gap-2",
    isActive ? "bg-white text-green-600" : "hover:bg-green-700/50",
  ]
    .join(" ")
    .replace(/,/g, "");

  const iconClasses = [
    "w-5 h-5 transition-colors duration-300",
    isActive ? "text-green-600" : "text-[#81C784]",
    isCollapsed ? "mx-auto" : "",
  ]
    .join(" ")
    .replace(/,/g, "");

  const labelClasses = [
    "truncate font-medium font-mono text-xs transition-colors duration-300",
    isActive ? "text-green-600" : "text-white",
  ]
    .join(" ")
    .replace(/,/g, "");

  return (
    <div
      key={item.id}
      onClick={() => onClick(item.id, item.route)}
      className={itemClasses}
    >
      <IconButton>
        <item.icon className={iconClasses} />
      </IconButton>
      {!isCollapsed && <span className={labelClasses}>{item.label}</span>}
    </div>
  );
}
