import { Search, Bell, CloudSun, Wifi, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Topbar() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <header className="h-24 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Smart Campus Dashboard
        </h1>

        <p className="text-slate-400 mt-1 text-lg">
          Digital Twin Monitoring System
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* System Status */}
        <div className="hidden xl:flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-xl">

          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

          <span className="text-green-400 text-sm font-semibold">
            All Systems Operational
          </span>

        </div>

        {/* Live Time */}
        <div className="hidden lg:flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl">

          <Clock3 className="text-cyan-400" size={18} />

          <span className="text-slate-200 text-sm">
            {time.toLocaleTimeString()}
          </span>

        </div>

        {/* Weather */}
        <div className="hidden md:flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl">

          <CloudSun className="text-yellow-400" size={20} />

          <span className="text-slate-200">
            31°C
          </span>

        </div>

        {/* Connection */}
        <div className="hidden lg:flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl">

          <Wifi className="text-cyan-400" size={18} />

          <span className="text-slate-200 text-sm">
            Connected
          </span>

        </div>

        {/* Search */}
        <button className="bg-slate-800 p-3 rounded-xl hover:bg-cyan-600 transition">
          <Search size={20} />
        </button>

        {/* Notifications */}
        <button className="bg-slate-800 p-3 rounded-xl hover:bg-cyan-600 transition relative">

          <Bell size={20} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-ping"></span>

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-12 h-12 rounded-full border-2 border-cyan-500"
          />

          <div className="hidden lg:block">

            <p className="font-semibold text-white">
              Admin
            </p>

            <p className="text-xs text-slate-400">
              Smart Campus AI
            </p>

          </div>

        </div>

      </div>
    </header>
  );
}