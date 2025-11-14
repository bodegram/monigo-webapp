import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
            <div className="text-center space-y-6">
                <h1 className="text-7xl font-extrabold text-indigo-400 drop-shadow-lg">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold">
                    Page Not Found
                </h2>

                <p className="text-slate-300 max-w-md mx-auto">
                    The page you are looking for doesn’t exist or has been moved.
                    Please check the URL or return to the homepage.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-indigo-600 hover:bg-indigo-500 transition px-8 py-2.5 rounded-lg font-semibold shadow-lg mt-4"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
