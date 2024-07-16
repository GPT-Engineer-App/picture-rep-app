import { Home, List, Bell, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <Home className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Tasks",
    to: "/tasks",
    icon: <List className="h-4 w-4" />,
    page: <div>Tasks Page</div>,
  },
  {
    title: "Notifications",
    to: "/notifications",
    icon: <Bell className="h-4 w-4" />,
    page: <div>Notifications Page</div>,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <div>Settings Page</div>,
  },
];