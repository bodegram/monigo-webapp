import React, { useState } from "react";
import { TrendingUp, TrendingDown, X } from "lucide-react";

export default function Assets() {
  // Predefined available assets
  const availableAssets = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      value: 32500,
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      value: 2450,
    },
    {
      id: 3,
      name: "Solana",
      symbol: "SOL",
      icon: "https://cryptologos.cc/logos/solana-sol-logo.png",
      value: 160,
    },
    {
      id: 4,
      name: "Tesla",
      symbol: "TSLA",
      icon: "https://companieslogo.com/img/orig/TSLA_BIG-5b3a3a3f.png",
      value: 250,
    },
  ];

  // User holdings
  const [assets, setAssets] = useState([
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      balance: 0.523,
      value: 32500,
      change: +4.2,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const totalValue = assets.reduce((sum, a) => sum + a.balance * a.value, 0);

  const addAssetToHoldings = (asset) => {
    // Prevent duplicate
    if (assets.find((a) => a.symbol === asset.symbol)) {
      alert(`${asset.name} is already in your holdings.`);
      return;
    }

    // Add with default balance 0 and change 0%
    setAssets([
      ...assets,
      { ...asset, balance: 0, change: 0 },
    ]);

    setShowModal(false);
  };

  return (
    <div className="space-y-8 relative">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Your Assets 💰</h1>
        <p className="text-gray-400 text-sm">
          Track your crypto and investment portfolio in real-time.
        </p>
      </div>

      {/* Portfolio Summary */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md max-w-3xl">
        <h2 className="text-lg text-gray-300 font-medium mb-3">Portfolio Value</h2>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl md:text-4xl font-semibold text-white">
              ${totalValue.toLocaleString()}
            </p>
            <p className="text-green-400 text-sm mt-1">+3.4% Today</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-xl"
          >
            + Add Asset
          </button>
        </div>
      </div>

      {/* Asset List */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md overflow-x-auto">
        <h2 className="text-lg text-gray-300 font-medium mb-4">Your Holdings</h2>
        <table className="min-w-full text-sm text-gray-300">
          <thead>
            <tr className="text-left text-gray-400 border-b border-white/10">
              <th className="py-3">Asset</th>
              <th className="py-3">Balance</th>
              <th className="py-3">Price</th>
              <th className="py-3">Change</th>
              <th className="py-3">Value</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr
                key={asset.id}
                className="border-b border-white/10 hover:bg-white/5 transition"
              >
                <td className="py-3 flex items-center gap-3">
                  <img src={asset.icon} alt={asset.name} className="w-7 h-7 rounded-full" />
                  <div>
                    <p className="text-white font-medium">{asset.name}</p>
                    <p className="text-gray-400 text-xs">{asset.symbol}</p>
                  </div>
                </td>
                <td className="py-3">{asset.balance}</td>
                <td className="py-3">${asset.value.toLocaleString()}</td>
                <td className="py-3 flex items-center gap-1">
                  {asset.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span
                    className={`${
                      asset.change >= 0 ? "text-green-400" : "text-red-400"
                    } font-medium`}
                  >
                    {asset.change}%
                  </span>
                </td>
                <td className="py-3">
                  ${(asset.balance * asset.value).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Asset Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 w-full max-w-md relative shadow-xl animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-white text-lg font-semibold mb-4">Select Asset to Add</h2>

            <div className="space-y-3 max-h-80 overflow-y-auto">
              {availableAssets.map((asset) => (
                <div
                  key={asset.id}
                  onClick={() => addAssetToHoldings(asset)}
                  className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 cursor-pointer rounded-xl transition"
                >
                  <div className="flex items-center gap-3">
                    <img src={asset.icon} alt={asset.name} className="w-7 h-7 rounded-full" />
                    <div>
                      <p className="text-white font-medium">{asset.name}</p>
                      <p className="text-gray-400 text-xs">{asset.symbol}</p>
                    </div>
                  </div>
                  <span className="text-gray-300">${asset.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
