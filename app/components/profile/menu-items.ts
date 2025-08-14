import {
    Home,
    Info,
    Book,
    Heart,
    Phone,
    HelpCircle,
    ShoppingCart,
    Package,
    Inbox,
} from "lucide-react";

export interface MenuItemData {
    id: string;
    label: string;
    icon: React.ElementType;
    route: string;
}

export const mainMenuItems: MenuItemData[] = [
    { id: "home", label: "Home", icon: Home, route: "/" },
    { id: "about", label: "About Us", icon: Info, route: "/profile" },
    { id: "browse", label: "Browse Books", icon: Book, route: "/profile" },
    {
        id: "order-books",
        label: "Order Books",
        icon: Heart,
        route: "/profile",
    },
    { id: "contact", label: "Contact Us", icon: Phone, route: "/profile" },
    { id: "faqs", label: "FAQs", icon: HelpCircle, route: "/profile" },
];

export const yoursMenuItems: MenuItemData[] = [
    { id: "cart", label: "Cart", icon: ShoppingCart, route: "/profile/cart" },
    { id: "orders", label: "Orders", icon: Package, route: "/profile/order-books" },
    { id: "inbox", label: "Inbox", icon: Inbox, route: "/profile" },
    { id: "help", label: "Help", icon: HelpCircle, route: "/profile" },
]; 