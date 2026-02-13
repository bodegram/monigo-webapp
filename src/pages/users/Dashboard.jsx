import React, { useState } from "react";
import {
  UserGroupIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  // Reputation / Score
  const [score, setScore] = useState(3500);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "gain" or "lose"
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      alert("Enter a valid value");
      return;
    }

    if (modalType === "lose" && numAmount > score) {
      alert("Insufficient score");
      return;
    }

    if (modalType === "gain") setScore(score + numAmount);
    if (modalType === "lose") setScore(score - numAmount);

    setAmount("");
    setShowModal(false);
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="space-y-8">
      {/* ================= Header ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Welcome back 👋
          </h1>
          <p className="text-gray-400 text-sm">
            Here’s a snapshot of your prediction performance today.
          </p>
        </div>

        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium shadow-md">
          View Full Analytics
        </button>
      </div>

      {/* ================= Reputation Card ================= */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-gray-300 text-sm">Reputation Score</h3>
          <p className="text-2xl md:text-3xl font-semibold text-white mt-1">
            {score.toLocaleString()}
          </p>
          <p className="text-green-400 text-xs mt-1">
            Based on long-term prediction accuracy
          </p>
        </div>

        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-md"
            onClick={() => openModal("gain")}
          >
            Gain Score
          </button>
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md"
            onClick={() => openModal("lose")}
          >
            Lose Score
          </button>
        </div>
      </div>

      {/* ================= Stats Cards ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Active Predictors */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <UserGroupIcon className="h-6 w-6 text-indigo-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Active Predictors</h3>
          <p className="text-xl font-semibold text-white mt-1">1,245</p>
        </div>

        {/* Predictions Resolved */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <ChartBarIcon className="h-6 w-6 text-blue-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Predictions Resolved</h3>
          <p className="text-xl font-semibold text-white mt-1">312</p>
        </div>

        {/* Accuracy */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <StarIcon className="h-6 w-6 text-yellow-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Accuracy Score</h3>
          <p className="text-xl font-semibold text-white mt-1">68.4%</p>
        </div>

        {/* Skill Growth */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <ArrowTrendingUpIcon className="h-6 w-6 text-green-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Skill Improvement</h3>
          <p className="text-xl font-semibold text-white mt-1">+12%</p>
        </div>
      </div>

      {/* ================= Recent Prediction Activity ================= */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md">
        <h2 className="text-lg font-semibold text-white mb-4">
          Recent Prediction Activity
        </h2>

        <ul className="space-y-4 text-gray-300 text-sm">
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>Prediction resolved: BTC &gt; $35k</span>
            <span className="text-green-400">Correct</span>
          </li>
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>New prediction submitted (Sports)</span>
            <span className="text-gray-400">12 mins ago</span>
          </li>
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>Reputation score increased</span>
            <span className="text-green-400">+120</span>
          </li>
          <li className="flex justify-between">
            <span>Prediction resolved: Tech earnings</span>
            <span className="text-red-400">Incorrect</span>
          </li>
        </ul>
      </div>

      {/* ================= Score Modal ================= */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-xl relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2 className="text-white text-lg font-semibold mb-4">
              {modalType === "gain" ? "Gain Reputation" : "Lose Reputation"}
            </h2>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            />

            <button
              onClick={handleSubmit}
              className={`w-full px-4 py-2 rounded-xl text-white shadow-md ${
                modalType === "gain"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {modalType === "gain" ? "Confirm Gain" : "Confirm Loss"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
