import { Home, List, Bell, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Notifications from "./pages/Notifications.jsx";
import SettingsPage from "./pages/Settings.jsx";

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
    title: "Dashboard",
    to: "/dashboard",
    icon: <List className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Notifications",
    to: "/notifications",
    icon: <Bell className="h-4 w-4" />,
    page: <Notifications />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <SettingsPage />,
  },
];