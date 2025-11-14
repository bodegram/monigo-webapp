import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">
            M
          </div>
          <h1 className="text-lg font-semibold">Monigo</h1>
        </div>

        <div className="hidden md:flex gap-6 text-slate-300 text-sm font-medium">
          <Link to="/auth/login" className="hover:text-white transition">
            Sign In
          </Link>
          <Link to="/auth/register" className="hover:text-white transition">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-16 md:py-24 gap-12">
        {/* Left Side */}
        <div className="flex-1 space-y-6 text-center md:text-left animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Monigo
            </span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            A modern space to connect, create, and grow. Join our community or
            sign in to continue your journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <Link
              to="/auth/login"
              className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-8 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-500/20"
            >
              Sign In
            </Link>
            <Link
              to="/auth/register"
              className="bg-white/10 border border-slate-600 hover:bg-white/20 transition-colors px-8 py-3 rounded-lg font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full w-72 h-72 md:w-96 md:h-96 top-10 left-10 animate-pulse opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
            alt="Team collaboration"
            className="w-80 md:w-[420px] rounded-2xl shadow-2xl relative z-10"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-sm py-6 border-t border-white/10">
        © {new Date().getFullYear()} Monigo. All rights reserved.
      </footer>
    </div>
  );
}
