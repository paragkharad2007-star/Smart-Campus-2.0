import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex overflow-hidden">

      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content */}
      <main
        className="
  flex-1
  min-w-0
  p-4
  sm:p-6
  overflow-y-auto
  overflow-x-hidden
"
      >
        <Topbar />

        <div className="mt-6">
          {children}
        </div>
      </main>

    </div>
  );
}