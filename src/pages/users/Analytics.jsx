import React from "react";
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  /* ================================
     Prediction Activity Data
     ================================ */
  const predictionActivityData = [
    { day: "Mon", predictions: 120 },
    { day: "Tue", predictions: 210 },
    { day: "Wed", predictions: 98 },
    { day: "Thu", predictions: 165 },
    { day: "Fri", predictions: 142 },
    { day: "Sat", predictions: 190 },
    { day: "Sun", predictions: 240 },
  ];

  return (
    <div className="space-y-8">
      {/* ================= Header ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Analytics Overview 📊
          </h1>
          <p className="text-gray-400 text-sm">
            Platform-wide insights into prediction quality, activity, and growth.
          </p>
        </div>

        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium shadow-md">
          Export Report
        </button>
      </div>

      {/* ================= Summary Metrics ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Active Predictors */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <UserGroupIcon className="h-6 w-6 text-indigo-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Active Predictors</h3>
          <p className="text-xl font-semibold text-white mt-1">1,248</p>
          <span className="text-green-400 text-xs">+9% this week</span>
        </div>

        {/* Predictions Created */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <ChartBarIcon className="h-6 w-6 text-blue-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Predictions Created</h3>
          <p className="text-xl font-semibold text-white mt-1">8,430</p>
          <span className="text-green-400 text-xs">+14% this week</span>
        </div>

        {/* Average Accuracy */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <CheckBadgeIcon className="h-6 w-6 text-green-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Average Accuracy</h3>
          <p className="text-xl font-semibold text-white mt-1">68.4%</p>
          <span className="text-green-400 text-xs">+2.1% this week</span>
        </div>

        {/* Resolution Rate */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <ArrowTrendingUpIcon className="h-6 w-6 text-orange-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Resolution Rate</h3>
          <p className="text-xl font-semibold text-white mt-1">91%</p>
          <span className="text-gray-400 text-xs">Stable</span>
        </div>
      </div>

      {/* ================= Prediction Activity Chart ================= */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md">
        <h2 className="text-lg font-semibold text-white mb-4">
          Prediction Activity (Last 7 Days)
        </h2>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={predictionActivityData}>
              <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#c7d2fe" }}
              />
              <Line
                type="monotone"
                dataKey="predictions"
                stroke="#6366f1"
                strokeWidth={3}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= Category Performance ================= */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md">
        <h2 className="text-lg font-semibold text-white mb-4">
          Top Prediction Categories
        </h2>

        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="text-gray-400 border-b border-white/10">
              <th className="text-left py-2">Category</th>
              <th className="text-right py-2">Predictions</th>
              <th className="text-right py-2">Avg Accuracy</th>
              <th className="text-right py-2">Resolution</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="py-3">Crypto Markets</td>
              <td className="text-right">2,430</td>
              <td className="text-right text-green-400">71%</td>
              <td className="text-right">94%</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3">Sports</td>
              <td className="text-right">1,980</td>
              <td className="text-right text-green-400">66%</td>
              <td className="text-right">92%</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3">Politics</td>
              <td className="text-right">1,120</td>
              <td className="text-right text-yellow-400">61%</td>
              <td className="text-right">88%</td>
            </tr>
            <tr>
              <td className="py-3">Technology</td>
              <td className="text-right">840</td>
              <td className="text-right text-green-400">69%</td>
              <td className="text-right">90%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
