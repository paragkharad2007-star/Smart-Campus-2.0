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
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-cyan-400">
            🌤 Campus Weather
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Live weather conditions
          </p>
        </div>

        <div className="text-right">
          <p className="text-4xl font-bold text-white">
            {Math.round(weather.main.temp)}°
          </p>

          <p className="text-slate-400">
            {weather.weather[0].main}
          </p>
        </div>

      </div>

      {/* Weather Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-slate-400 text-sm">📍 City</p>
          <p className="font-semibold mt-1">{weather.name}</p>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-slate-400 text-sm">💧 Humidity</p>
          <p className="font-semibold mt-1">
            {weather.main.humidity}%
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-slate-400 text-sm">🌬 Wind</p>
          <p className="font-semibold mt-1">
            {weather.wind.speed} m/s
          </p>
        </div>

        <div className="bg-slate-800 rounded-xl p-3">
          <p className="text-slate-400 text-sm">🌡 Feels Like</p>
          <p className="font-semibold mt-1">
            {Math.round(weather.main.feels_like)}°
          </p>
        </div>

      </div>

    </div>
  );
}