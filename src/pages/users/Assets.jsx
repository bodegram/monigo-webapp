import React, { useState } from "react";
import { TrendingUp, TrendingDown, X, CheckCircle, XCircle } from "lucide-react";

export default function Predictions() {
  // Available prediction topics
  const availablePredictions = [
    {
      id: 1,
      title: "Bitcoin above $35,000 by March 31",
      category: "Crypto",
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      target: "$35,000",
    },
    {
      id: 2,
      title: "Ethereum above $3,000 by Q2",
      category: "Crypto",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      target: "$3,000",
    },
    {
      id: 3,
      title: "Tesla stock above $300 this year",
      category: "Stocks",
      icon: "https://companieslogo.com/img/orig/TSLA_BIG-5b3a3a3f.png",
      target: "$300",
    },
  ];

  // User predictions
  const [predictions, setPredictions] = useState([
    {
      id: 1,
      title: "Bitcoin above $35,000 by March 31",
      category: "Crypto",
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      confidence: 72, // %
      status: "open", // open | correct | incorrect
      accuracyChange: +4.2,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const overallAccuracy =
    predictions.length > 0
      ? Math.round(
          predictions.reduce((sum, p) => sum + p.confidence, 0) /
            predictions.length
        )
      : 0;

  const addPrediction = (prediction) => {
    if (predictions.find((p) => p.title === prediction.title)) {
      alert("This prediction already exists.");
      return;
    }

    setPredictions([
      ...predictions,
      {
        ...prediction,
        confidence: 50,
        status: "open",
        accuracyChange: 0,
      },
    ]);

    setShowModal(false);
  };

  return (
    <div className="space-y-8 relative">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-white">
          Your Predictions 🔮
        </h1>
        <p className="text-gray-400 text-sm">
          Track your forecasts, confidence levels, and long-term accuracy.
        </p>
      </div>

      {/* Accuracy Summary */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md max-w-3xl">
        <h2 className="text-lg text-gray-300 font-medium mb-3">
          Overall Accuracy Score
        </h2>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-3xl md:text-4xl font-semibold text-white">
              {overallAccuracy}%
            </p>
            <p className="text-green-400 text-sm mt-1">
              Based on active predictions
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-xl"
          >
            + New Prediction
          </button>
        </div>
      </div>

      {/* Prediction List */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-md overflow-x-auto">
        <h2 className="text-lg text-gray-300 font-medium mb-4">
          Active Predictions
        </h2>
        <table className="min-w-full text-sm text-gray-300">
          <thead>
            <tr className="text-left text-gray-400 border-b border-white/10">
              <th className="py-3">Prediction</th>
              <th className="py-3">Confidence</th>
              <th className="py-3">Status</th>
              <th className="py-3">Trend</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((p) => (
              <tr
                key={p.id}
                className="border-b border-white/10 hover:bg-white/5 transition"
              >
                <td className="py-3 flex items-center gap-3">
                  <img src={p.icon} alt="" className="w-7 h-7 rounded-full" />
                  <div>
                    <p className="text-white font-medium">{p.title}</p>
                    <p className="text-gray-400 text-xs">{p.category}</p>
                  </div>
                </td>

                <td className="py-3">{p.confidence}%</td>

                <td className="py-3">
                  {p.status === "open" && (
                    <span className="text-yellow-400">Open</span>
                  )}
                  {p.status === "correct" && (
                    <span className="text-green-400 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Correct
                    </span>
                  )}
                  {p.status === "incorrect" && (
                    <span className="text-red-400 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> Incorrect
                    </span>
                  )}
                </td>

                <td className="py-3 flex items-center gap-1">
                  {p.accuracyChange >= 0 ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span
                    className={`${
                      p.accuracyChange >= 0
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {p.accuracyChange}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Prediction Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 w-full max-w-md relative shadow-xl">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-white text-lg font-semibold mb-4">
              Add a Prediction
            </h2>

            <div className="space-y-3 max-h-80 overflow-y-auto">
              {availablePredictions.map((p) => (
                <div
                  key={p.id}
                  onClick={() => addPrediction(p)}
                  className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 cursor-pointer rounded-xl transition"
                >
                  <div className="flex items-center gap-3">
                    <img src={p.icon} alt="" className="w-7 h-7 rounded-full" />
                    <div>
                      <p className="text-white font-medium">{p.title}</p>
                      <p className="text-gray-400 text-xs">{p.category}</p>
                    </div>
                  </div>
                  <span className="text-gray-300">{p.target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
