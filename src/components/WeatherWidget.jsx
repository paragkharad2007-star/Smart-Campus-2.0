import { useEffect, useState } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

        const city = "Mumbai";

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        const data = await res.json();

        setWeather(data);
      } catch (error) {
        console.error("Weather Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
        <p className="text-white">Loading weather...</p>
      </div>
    );
  }

  if (!weather || weather.cod !== 200) {
    return (
      <div className="bg-slate-900 border border-red-500 rounded-2xl p-6">
        <p className="text-red-400">Unable to load weather.</p>
      </div>
    );
  }

  return (
  <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl">

    {/* Header */}
    <div className="flex justify-between items-start mb-6">

      <div>
        <h2 className="text-2xl font-bold text-cyan-400">
          🌤️ Campus Weather
        </h2>

        <p className="text-slate-300 mt-1">
          Live weather conditions
        </p>
      </div>

      <div className="text-right">
        <p className="text-4xl font-bold text-white">
          29°
        </p>

        <p className="text-slate-300 mt-1">
          Rain
        </p>
      </div>

    </div>

    {/* Weather Details */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

      {/* City */}
      <div className="bg-slate-800 rounded-2xl p-5">
        <p className="text-slate-300 text-lg">
          📍 City
        </p>

        <p className="text-white text-xl font-semibold mt-2">
          Mumbai
        </p>
      </div>

      {/* Humidity */}
      <div className="bg-slate-800 rounded-2xl p-5">
        <p className="text-slate-300 text-lg">
          💧 Humidity
        </p>

        <p className="text-white text-xl font-semibold mt-2">
          77%
        </p>
      </div>

      {/* Wind */}
      <div className="bg-slate-800 rounded-2xl p-5">
        <p className="text-slate-300 text-lg">
          💨 Wind
        </p>

        <p className="text-white text-xl font-semibold mt-2">
          6.68 m/s
        </p>
      </div>

      {/* Feels Like */}
      <div className="bg-slate-800 rounded-2xl p-5">
        <p className="text-slate-300 text-lg">
          🌡️ Feels Like
        </p>

        <p className="text-white text-xl font-semibold mt-2">
          33°
        </p>
      </div>

    </div>

  </div>
);
}