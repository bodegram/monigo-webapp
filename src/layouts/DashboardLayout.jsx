import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
    HomeIcon,
    UserIcon,
    Cog6ToothIcon,
    ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth()

    const handleLogout = () => {
        logout()
        navigate("/auth/login");
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* ✅ Top nav */}
            <header className="bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm max-w-6xl mx-auto w-full">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">
                            M
                        </div>
                        <span className="text-lg font-semibold text-white">Hi, Samuel</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        {/* Mobile menu button */}
                        <button className="p-2 text-gray-300 hover:text-blue-400 focus:outline-none md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>

                        {/* Logout button */}
                        <button
                            onClick={handleLogout}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium shadow-md"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* ✅ Main content with bottom padding to prevent overlap */}
            <main className="flex-1 max-w-6xl mx-auto w-full p-4 md:p-6 pb-24">
                <Outlet />
            </main>

            {/* ✅ Bottom Tab Bar (visible on all devices) */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/10 shadow-lg flex justify-around md:justify-center md:space-x-16 py-3 z-50 max-w-6xl mx-auto w-full">
                <Link
                    to="/dashboard"
                    className={`flex flex-col items-center ${location.pathname === "/dashboard" ? "text-blue-400" : "text-gray-300"
                        }`}
                >
                    <HomeIcon className="h-6 w-6" />
                    <span className="text-xs mt-1">Home</span>
                </Link>

                <Link
                    to="/assets"
                    className={`flex flex-col items-center ${location.pathname === "/assets" ? "text-blue-400" : "text-gray-300"
                        }`}
                >
                    <HomeIcon className="h-6 w-6" />
                    <span className="text-xs mt-1">Assets</span>
                </Link>

                <Link
                    to="/analytics"
                    className={`flex flex-col items-center ${location.pathname === "/analytics" ? "text-blue-400" : "text-gray-300"
                        }`}
                >
                    <ChartBarIcon className="h-6 w-6" />
                    <span className="text-xs mt-1">Analytics</span>
                </Link>

                <Link
                    to="/profile"
                    className={`flex flex-col items-center ${location.pathname === "/profile" ? "text-blue-400" : "text-gray-300"
                        }`}
                >
                    <UserIcon className="h-6 w-6" />
                    <span className="text-xs mt-1">Profile</span>
                </Link>

                <Link
                    to="/settings"
                    className={`flex flex-col items-center ${location.pathname === "/settings" ? "text-blue-400" : "text-gray-300"
                        }`}
                >
                    <Cog6ToothIcon className="h-6 w-6" />
                    <span className="text-xs mt-1">Settings</span>
                </Link>
            </nav>
        </div>
    );
}
