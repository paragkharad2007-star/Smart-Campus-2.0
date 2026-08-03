import {
  LayoutDashboard,
  Building2,
  Users,
  Zap,
  Droplets,
  Wrench,
  ShieldAlert,
  Brain,
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
  return (
    <aside className="hidden lg:flex w-64 xl:w-72 h-screen bg-slate-950 border-r border-slate-800 flex-col shrink-0">

      <div className="p-6 xl:p-8">
        <h1 className="text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
          Smart Campus 2.0
        </h1>
      </div>

      <nav className="flex-1 px-3 xl:px-4 overflow-y-auto">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => {
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

                setActiveTab(routes[item.name]);
              }}
              className={`w-full flex items-center gap-4 px-5 py-4 mb-2 rounded-xl transition-all duration-300 ${(
                (item.name === "Dashboard" && activeTab === "campus") ||
                (item.name === "Campus Twin" && activeTab === "campus") ||
                (item.name === "Occupancy" && activeTab === "campus") ||
                (item.name === "Water" && activeTab === "campus") ||
                (item.name === "Energy" && activeTab === "energy") ||
                (item.name === "Maintenance" && activeTab === "notifications") ||
                (item.name === "Emergency" && activeTab === "alerts") ||
                (item.name === "AI Insights" && activeTab === "ai")
              )
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400"
                : "text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400"
                }`}
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
  );
}