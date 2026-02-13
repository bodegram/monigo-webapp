import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-2.png";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Navbar */}
     <nav className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-white/10 backdrop-blur-md">
  <Link to="/" className="flex items-center">
    <img
      src={logo}
      alt="Linkviq logo"
      className="h-16 md:h-20 w-auto object-contain"
    />
  </Link>

  <div className="hidden md:flex gap-6 text-slate-300 text-sm font-medium">
    <Link to="/auth/login" className="hover:text-white transition">
      Sign In
    </Link>
    <Link to="/auth/register" className="hover:text-white transition">
      Sign Up
    </Link>
  </div>
</nav>



      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Predict the{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              future
            </span>{" "}
            with confidence
          </h1>

          <p className="text-slate-300 max-w-xl mx-auto md:mx-0">
            Linkviq is a prediction intelligence platform where users forecast
            future outcomes, analyze probabilities, and track accuracy over
            time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/auth/register"
              className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-500/20"
            >
              Start Predicting
            </Link>
            <Link
              to="/auth/login"
              className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-3 rounded-lg font-semibold"
            >
              View Insights
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full w-80 h-80 opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
            alt="Data prediction dashboard"
            className="w-80 md:w-[420px] rounded-2xl shadow-2xl relative z-10"
          />
        </div>
      </section>

      {/* What Linkviq Does */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold text-center mb-12">
          What is Linkviq?
        </h2>

        <div className="max-w-3xl mx-auto text-center text-slate-300 leading-relaxed">
          Linkviq combines human intuition, historical data, and probability
          modeling to forecast future events. Users submit predictions, assign
          confidence levels, and earn reputation based on long-term accuracy.
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          How predictions work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            "Select a future event",
            "Analyze trends & data",
            "Submit probability-based prediction",
            "Track outcome & accuracy score",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="text-indigo-400 text-2xl font-bold mb-2">
                {i + 1}
              </div>
              <p className="text-slate-300 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold text-center mb-12">
          What can you predict?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Financial Markets",
            "Sports Outcomes",
            "Political Events",
            "Technology Trends",
            "Crypto Movements",
            "Economic Indicators",
            "Startup Success",
            "Global Events",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 hover:bg-white/10 transition border border-white/10 rounded-xl py-6 font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Why Linkviq */}
      <section className="px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Linkviq is different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Accuracy over opinions</h3>
            <p className="text-slate-400 text-sm">
              Track real prediction performance instead of loud opinions.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Transparent scoring</h3>
            <p className="text-slate-400 text-sm">
              Every prediction is evaluated with clear, open metrics.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Reputation system</h3>
            <p className="text-slate-400 text-sm">
              The more accurate you are, the more influence you gain.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 py-20 text-center border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-indigo-400">25K+</h3>
            <p className="text-slate-400">Predictions made</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-400">92%</h3>
            <p className="text-slate-400">Top predictor accuracy</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-400">7 Days</h3>
            <p className="text-slate-400">Avg. resolution time</p>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Predict anywhere, anytime
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto md:mx-0">
              Download the Linkviq mobile app and submit predictions, track outcomes,
              and view insights on the go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl font-medium hover:scale-105 transition"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>

              {/* Play Store */}
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-black px-5 py-3 rounded-xl font-medium hover:scale-105 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Right - App Preview */}
          <div className="flex-1 flex justify-center relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full w-72 h-72 opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&w=500&q=80"
              alt="Linkviq mobile app preview"
              className="w-64 md:w-72 rounded-2xl shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="px-6 md:px-12 py-20 bg-indigo-600/10 border-t border-indigo-500/20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The future is being decided now
        </h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Join Linkviq and put your predictions to the test.
        </p>
        <Link
          to="/auth/register"
          className="bg-indigo-600 hover:bg-indigo-500 px-10 py-4 rounded-lg font-semibold shadow-lg shadow-indigo-500/30"
        >
          Create your account
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-slate-500 text-sm py-6 border-t border-white/10">
        © {new Date().getFullYear()} Linkviq. All rights reserved.
      </footer>
    </div>
  );
}
