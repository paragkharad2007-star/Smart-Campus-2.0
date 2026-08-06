import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900/80 border border-slate-700 rounded-2xl px-6 py-4 flex justify-between items-center">

      <div>
        <h3 className="text-cyan-400 font-semibold">
          Smart Campus Time
        </h3>

        <p className="text-slate-300">
          {time.toLocaleDateString()}
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white">
        {time.toLocaleTimeString()}
      </h2>

    </div>
  );
}