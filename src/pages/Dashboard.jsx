import React, { Suspense, useEffect, useState } from "react";
import { initialBuildings } from "../data/liveCampusData";
import { simulateLiveData } from "../utils/simulateLiveData";
import {
  Users,
  Zap,
  Droplets,
  TriangleAlert,
} from "lucide-react";

import DashboardLayout from "../components/DashboardLayout";
import KPICard from "../components/KPICard";
const CampusMap = React.lazy(() => import("../components/CampusMaps"));
const AIInsights = React.lazy(() => import("../components/AIInsights"));
const EnergyChart = React.lazy(() => import("../components/EnergyChart"));
const NotificationPanel = React.lazy(() => import("../components/NotificationPanel"));
const AIAlertEngine = React.lazy(() => import("../components/AIAlertEngine"));
const AICommandCenter = React.lazy(() => import("../components/AICommandCenter"));
const WeatherWidget = React.lazy(() => import("../components/WeatherWidget"));


export default function Dashboard() {
  const [buildings, setBuildings] = useState(initialBuildings);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("campus");
  const [selectedBuilding, setSelectedBuilding] = useState(buildings[0]);

  const totalStudents = buildings.reduce(
    (sum, building) => sum + building.students,
    0
  );

  const averageEnergy = Math.round(
    buildings.reduce(
      (sum, building) => sum + parseInt(building.energy),
      0
    ) / buildings.length
  );

  const averageWater = Math.round(
    buildings.reduce(
      (sum, building) => sum + parseInt(building.water),
      0
    ) / buildings.length
  );

  const totalAlerts = buildings.filter(
    (building) => building.status === "red"
  ).length;

  const PageLoader = () => (
    <div className="flex items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBuildings((prevBuildings) => {
        const updated = simulateLiveData(prevBuildings);

        const current = updated.find(
          (b) => b.id === selectedBuilding.id
        );

        if (current) {
          setSelectedBuilding(current);
        }

        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedBuilding]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">

        <div className="text-center">

          <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <h1 className="mt-8 text-4xl font-bold text-cyan-400">
            Smart Campus 2.0
          </h1>

          <p className="mt-3 text-slate-400">
            Initializing AI Digital Twin...
          </p>

        </div>

      </div>
    );
  }

  return (
    <DashboardLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >

      {/* KPI Cards */}

      <div className="grid
    grid-cols-1
    sm:grid-cols-2
    xl:grid-cols-4
    gap-6"
      >

        <KPICard
          title="Students Present"
          value={totalStudents}
          color="text-cyan-400"
          status="Live"
          icon={<Users size={40} />}
        />

        <KPICard
          title="Energy Usage"
          value={`${averageEnergy}%`}
          color="text-yellow-400"
          status="Normal"
          icon={<Zap size={40} />}
        />

        <KPICard
          title="Water Level"
          value={`${averageWater}%`}
          color="text-blue-400"
          status="Healthy"
          icon={<Droplets size={40} />}
        />

        <KPICard
          title="Alerts"
          value={totalAlerts}
          color="text-red-400"
          status="Attention"
          icon={<TriangleAlert size={40} />}
        />

      </div>

      <div className="mt-8">
        <Suspense fallback={<PageLoader />}>
          <WeatherWidget />
        </Suspense>
      </div>


      {/* Navigation Tabs */}

      <div className="mt-8 mb-8">

        <div
          className="
flex
flex-wrap
justify-center
gap-3
bg-slate-900/70
backdrop-blur-xl
border
border-slate-700
rounded-2xl
p-3
shadow-xl
max-w-6xl
mx-auto
">

          <button
            onClick={() => setActiveTab("campus")}
            className={`px-5 lg:px-7 py-3 text-sm lg:text-base rounded-xl transition-all duration-300 font-semibold ${activeTab === "campus"
              ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/40"
              : "text-slate-300 hover:bg-slate-800"
              }`}
          >
            🛰 Live Campus
          </button>

          <button
            onClick={() => setActiveTab("energy")}
            className={`px-5 lg:px-7 py-3 text-sm lg:text-base rounded-xl transition-all duration-300 font-semibold ${activeTab === "energy"
              ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/40"
              : "text-slate-300 hover:bg-slate-800"
              }`}
          >
            ⚡ Energy Analytics
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`px-5 lg:px-7 py-3 text-sm lg:text-base rounded-xl transition-all duration-300 font-semibold ${activeTab === "ai"
              ? "bg-green-500 text-white shadow-lg shadow-green-500/40"
              : "text-slate-300 hover:bg-slate-800"
              }`}
          >
            🤖 AI Analytics
          </button>

          <button
            onClick={() => setActiveTab("notifications")}
            className={`px-5 lg:px-7 py-3 text-sm lg:text-base rounded-xl transition-all duration-300 font-semibold ${activeTab === "notifications"
              ? "bg-purple-500 text-white shadow-lg shadow-purple-500/40"
              : "text-slate-300 hover:bg-slate-800"
              }`}
          >
            🔔 Notifications
          </button>

          <button
            onClick={() => setActiveTab("alerts")}
            className={`px-5 lg:px-7 py-3 text-sm lg:text-base rounded-xl transition-all duration-300 font-semibold ${activeTab === "alerts"
              ? "bg-red-500 text-white shadow-lg shadow-red-500/40"
              : "text-slate-300 hover:bg-slate-800"
              }`}
          >
            🚨 AI Alerts
          </button>

          <button
            onClick={() => setActiveTab("assistant")}
            className={`px-5 lg:px-7 py-3 text-sm lg:text-base rounded-xl transition-all duration-300 font-semibold ${activeTab === "assistant"
              ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/40"
              : "text-slate-300 hover:bg-slate-800"
              }`}
          >
            🤖 AI Assistant
          </button>

        </div>

      </div>

      {/* Page Content */}

      {
        activeTab === "campus" && (
          <Suspense fallback={<PageLoader />}>
            <CampusMap
              buildings={buildings}
              selectedBuilding={selectedBuilding}
              setSelectedBuilding={setSelectedBuilding}
              setActiveTab={setActiveTab}
            />
          </Suspense>
        )
      }

      {
        activeTab === "energy" && (
          <Suspense fallback={<PageLoader />}>
            <EnergyChart />
          </Suspense>
        )
      }
      {
        activeTab === "ai" && (
          <Suspense fallback={<PageLoader />}>
            <AIInsights
              selectedBuilding={selectedBuilding}
            />
          </Suspense>
        )
      }

      {
        activeTab === "notifications" && (
          <Suspense fallback={<PageLoader />}>
            <NotificationPanel />
          </Suspense>
        )
      }

      {
        activeTab === "alerts" && (
          <Suspense fallback={<PageLoader />}>
            <AIAlertEngine />
          </Suspense>
        )
      }

      {
        activeTab === "assistant" && (
          <Suspense fallback={<PageLoader />}>
            <AICommandCenter
              buildings={buildings}
            />
          </Suspense>
        )
      }

    </DashboardLayout >
  );
}