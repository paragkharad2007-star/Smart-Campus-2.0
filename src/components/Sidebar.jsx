import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Users,
  Zap,
  Droplets,
  Wrench,
  ShieldAlert,
  Brain,
  Menu,
  X,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Campus Twin", icon: Building2 },
  { name: "Occupancy", icon: Users },
  { name: "Energy", icon: Zap },
  { name: "Water", icon: Droplets },
  { name: "Maintenance", icon: Wrench },
  { name: "Emergency", icon: ShieldAlert },
  { name: "AI Insights", icon: Brain },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const routes = {
    Dashboard: "campus",
    "Campus Twin": "campus",
    Occupancy: "campus",
    Energy: "energy",
    Water: "campus",
    Maintenance: "notifications",
    Emergency: "alerts",
    "AI Insights": "ai",
  };

  const handleNavigation = (itemName) => {
    setActiveTab(routes[itemName]);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed top-4 left-4
            z-[70]
            md:hidden
            bg-slate-900/95
            border border-cyan-500/50
            text-cyan-400
            p-3
            rounded-xl
            shadow-lg
            hover:bg-cyan-500/20
            transition-all duration-300
          "
        >
          <Menu size={24} />
        </button>
      )}

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed inset-0
            bg-black/60
            backdrop-blur-sm
            z-40
            md:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative
          top-0 left-0
          z-50
          h-screen
          w-72
          bg-slate-950
          border-r border-slate-800
          flex flex-col
          transition-transform duration-300 ease-in-out

          ${isOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        {/* Header */}
        <div
          className="
            p-6 xl:p-8
            flex items-center justify-between
            min-h-[100px]
          "
        >
          <h1
            className="
              text-2xl xl:text-3xl
              font-extrabold
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
              leading-tight
              pr-2
              md:pl-0
              pl-10
            "
          >
            Smart Campus 2.0
          </h1>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              md:hidden
              flex-shrink-0
              bg-slate-800
              text-slate-300
              p-2
              rounded-xl
              hover:bg-slate-700
              transition
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 xl:px-4 overflow-y-auto">

          {menu.map((item) => {
            const Icon = item.icon;

            const isActive =
              (item.name === "Dashboard" && activeTab === "campus") ||
              (item.name === "Campus Twin" && activeTab === "campus") ||
              (item.name === "Occupancy" && activeTab === "campus") ||
              (item.name === "Water" && activeTab === "campus") ||
              (item.name === "Energy" && activeTab === "energy") ||
              (item.name === "Maintenance" &&
                activeTab === "notifications") ||
              (item.name === "Emergency" &&
                activeTab === "alerts") ||
              (item.name === "AI Insights" &&
                activeTab === "ai");

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.name)}
                className={`
                  w-full
                  flex
                  items-center
                  gap-4
                  px-5
                  py-4
                  mb-2
                  rounded-xl
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400"
                      : "text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400"
                  }
                `}
              >
                <Icon size={20} />

                <span className="text-base xl:text-lg">
                  {item.name}
                </span>
              </button>
            );
          })}

        </nav>
      </aside>
    </>
  );
}