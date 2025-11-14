import React, { useState } from "react";
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [balance, setBalance] = useState(3500);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "deposit" or "withdraw"
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }
    if (modalType === "withdraw" && numAmount > balance) {
      alert("Insufficient balance");
      return;
    }

    if (modalType === "deposit") setBalance(balance + numAmount);
    else if (modalType === "withdraw") setBalance(balance - numAmount);

    setAmount("");
    setShowModal(false);
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Welcome back 👋
          </h1>
          <p className="text-gray-400 text-sm">
            Here’s an overview of your account today.
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium shadow-md">
          Generate Report
        </button>
      </div>

      {/* Balance Card */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md w-full  flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-gray-300 text-sm">Current Balance</h3>
          <p className="text-2xl md:text-3xl font-semibold text-white mt-1">
            ${balance.toLocaleString()}
          </p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-md"
            onClick={() => openModal("deposit")}
          >
            Deposit
          </button>
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md"
            onClick={() => openModal("withdraw")}
          >
            Withdraw
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/10">
          <UserGroupIcon className="h-6 w-6 text-blue-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Active Users</h3>
          <p className="text-xl font-semibold text-white mt-1">1,245</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/10">
          <CurrencyDollarIcon className="h-6 w-6 text-green-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Total Revenue</h3>
          <p className="text-xl font-semibold text-white mt-1">$12,560</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/10">
          <ChartBarIcon className="h-6 w-6 text-purple-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Analytics</h3>
          <p className="text-xl font-semibold text-white mt-1">98.2%</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white/10">
          <ArrowTrendingUpIcon className="h-6 w-6 text-orange-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Growth</h3>
          <p className="text-xl font-semibold text-white mt-1">+24%</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>New user registered</span>
            <span className="text-gray-400">2 mins ago</span>
          </li>
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>Payment from John Doe</span>
            <span className="text-gray-400">1 hour ago</span>
          </li>
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>Server uptime reached 99.9%</span>
            <span className="text-gray-400">3 hours ago</span>
          </li>
          <li className="flex justify-between">
            <span>Database backup completed</span>
            <span className="text-gray-400">Yesterday</span>
          </li>
        </ul>
      </div>

      {/* Deposit/Withdraw Modal */}
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
              {modalType === "deposit" ? "Deposit Funds" : "Withdraw Funds"}
            </h2>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />

            <button
              onClick={handleSubmit}
              className={`w-full px-4 py-2 rounded-xl text-white shadow-md ${
                modalType === "deposit"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {modalType === "deposit" ? "Deposit" : "Withdraw"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
