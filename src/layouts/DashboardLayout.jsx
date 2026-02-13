import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CommunityChatWidget from "../components/CommunityChatWidget";

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    navigate("/auth/login");
  };

  const navItems = [
    { name: "Home", path: "/app", icon: HomeIcon },
    { name: "Predictions", path: "/predictions", icon: ArrowTrendingUpIcon },
    { name: "Analytics", path: "/analytics", icon: ChartBarIcon },
    { name: "Profile", path: "/profile", icon: UserIcon },
    { name: "Settings", path: "/settings", icon: Cog6ToothIcon },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-white">

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 top-0 left-0 h-screen w-64 bg-slate-900 border-r border-white/5 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-indigo-500/30">
              L
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Linkviq
            </span>
          </Link>

          {/* Mobile close */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-slate-400 hover:text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                  ${
                    active
                      ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-0 w-full px-4">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500/90 hover:bg-red-600 text-white py-2 rounded-xl text-sm font-medium transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">

        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-slate-900/60 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-slate-400 hover:text-white"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>

            <h1 className="text-lg font-semibold tracking-tight">
              Dashboard
            </h1>
          </div>

          <div className="text-sm text-slate-400">
            Welcome back, <span className="text-white font-medium">Samuel</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      <CommunityChatWidget />
    </div>
  );
}
