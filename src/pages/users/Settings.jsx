import React, { useState } from "react";

export default function Settings() {
  const [formData, setFormData] = useState({
    email: "user@example.com",
    username: "john_doe",
    notifications: true,
    darkMode: false,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    alert("Settings saved successfully!");
    // TODO: Add API call to save settings and password
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Settings ⚙️</h1>
        <p className="text-gray-400 text-sm">
          Manage your account preferences and privacy settings.
        </p>
      </div>

      {/* Settings Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md space-y-6 max-w-2xl"
      >
        {/* Email */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm text-gray-300 mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Change Password */}
        <div className="space-y-4 mt-4 pt-4 border-t border-white/20">
          <h2 className="text-white font-medium text-sm">Change Password</h2>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Notification Preference */}
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Enable Notifications</span>
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
            className="w-5 h-5 accent-blue-500"
          />
        </div>

        {/* Dark Mode */}
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Enable Dark Mode</span>
          <input
            type="checkbox"
            name="darkMode"
            checked={formData.darkMode}
            onChange={handleChange}
            className="w-5 h-5 accent-blue-500"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium shadow-md"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
