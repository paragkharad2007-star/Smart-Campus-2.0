import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout({
  children,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1 min-w-0 p-4 sm:p-6 overflow-y-auto overflow-x-hidden">
        <div className="mt-6">
          {children}
        </div>
      </main>

    </div>
  );
}