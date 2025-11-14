import React from "react";
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
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
  // Sample traffic data
  const trafficData = [
    { day: "Mon", visitors: 1200 },
    { day: "Tue", visitors: 2100 },
    { day: "Wed", visitors: 800 },
    { day: "Thu", visitors: 1600 },
    { day: "Fri", visitors: 900 },
    { day: "Sat", visitors: 1700 },
    { day: "Sun", visitors: 2200 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Analytics Overview 📈
          </h1>
          <p className="text-gray-400 text-sm">
            Track performance, traffic, and growth insights.
          </p>
        </div>

        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium shadow-md">
          Export Report
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <UserGroupIcon className="h-6 w-6 text-blue-400 mb-2" />
          <h3 className="text-gray-300 text-sm">New Users</h3>
          <p className="text-xl font-semibold text-white mt-1">245</p>
          <span className="text-green-400 text-xs">+12% this week</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <CurrencyDollarIcon className="h-6 w-6 text-green-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Revenue</h3>
          <p className="text-xl font-semibold text-white mt-1">$5,640</p>
          <span className="text-green-400 text-xs">+8.5% this week</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <ChartBarIcon className="h-6 w-6 text-purple-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Engagement</h3>
          <p className="text-xl font-semibold text-white mt-1">72%</p>
          <span className="text-red-400 text-xs">-3% this week</span>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <ArrowTrendingUpIcon className="h-6 w-6 text-orange-400 mb-2" />
          <h3 className="text-gray-300 text-sm">Conversion Rate</h3>
          <p className="text-xl font-semibold text-white mt-1">4.3%</p>
          <span className="text-green-400 text-xs">+1.2% this week</span>
        </div>
      </div>

      {/* Traffic Chart */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md">
        <h2 className="text-lg font-semibold text-white mb-4">Traffic Overview</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trafficData}>
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="day" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", borderRadius: "8px" }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#fff" }}
              />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#3b82f6"
                strokeWidth={3}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Metrics Table */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md">
        <h2 className="text-lg font-semibold text-white mb-4">
          Top Performing Pages
        </h2>
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="text-gray-400 border-b border-white/10">
              <th className="text-left py-2">Page</th>
              <th className="text-right py-2">Views</th>
              <th className="text-right py-2">Clicks</th>
              <th className="text-right py-2">CTR</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="py-3">/home</td>
              <td className="text-right">12,340</td>
              <td className="text-right">5,230</td>
              <td className="text-right text-green-400">42.4%</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3">/products</td>
              <td className="text-right">9,876</td>
              <td className="text-right">3,512</td>
              <td className="text-right text-green-400">35.6%</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3">/pricing</td>
              <td className="text-right">7,431</td>
              <td className="text-right">2,654</td>
              <td className="text-right text-green-400">30.8%</td>
            </tr>
            <tr>
              <td className="py-3">/about</td>
              <td className="text-right">5,220</td>
              <td className="text-right">1,120</td>
              <td className="text-right text-green-400">21.4%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
