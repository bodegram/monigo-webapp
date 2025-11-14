import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold animate-pulse">
        M
      </div>
    </div>
  );
}
