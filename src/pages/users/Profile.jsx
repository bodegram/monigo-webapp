import React, { useState } from "react";

export default function Profile() {
  const [balance, setBalance] = useState(1200); // User account balance
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

    if (modalType === "deposit") {
      setBalance(balance + numAmount);
    } else if (modalType === "withdraw") {
      setBalance(balance - numAmount);
    }

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
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          Your Profile 👤
        </h1>
        <p className="text-gray-400 text-sm">
          View and update your personal information.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md flex flex-col md:flex-row items-center gap-6 max-w-3xl">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-white">John Doe</h2>
          <p className="text-gray-400 text-sm">john@example.com</p>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Username:</span>
              <span className="font-medium">john_doe</span>
            </div>
            <div className="flex justify-between text-sm text-gray-300">
              <span>Member Since:</span>
              <span className="font-medium">March 2023</span>
            </div>
            <div className="flex justify-between text-sm text-gray-300">
              <span>Account Type:</span>
              <span className="font-medium text-blue-400">Premium</span>
            </div>
            <div className="flex justify-between text-sm text-gray-300">
              <span>Balance:</span>
              <span className="font-medium text-green-400">${balance.toFixed(2)}</span>
            </div>
          </div>

          {/* Deposit & Withdraw Buttons */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => openModal("deposit")}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow-md"
            >
              Deposit
            </button>
            <button
              onClick={() => openModal("withdraw")}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-md"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md max-w-3xl">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>Updated profile picture</span>
            <span className="text-gray-400">2 hours ago</span>
          </li>
          <li className="flex justify-between border-b border-white/10 pb-2">
            <span>Changed password</span>
            <span className="text-gray-400">1 day ago</span>
          </li>
          <li className="flex justify-between">
            <span>Enabled two-factor authentication</span>
            <span className="text-gray-400">3 days ago</span>
          </li>
        </ul>
      </div>

      {/* Deposit/Withdraw Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-xl animate-fadeIn relative">
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
