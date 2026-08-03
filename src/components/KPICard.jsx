import AnimatedCounter from "./AnimatedCounter";

export default function KPICard({
  title,
  value,
  color,
  icon,
  status,
}) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-gradient-to-br
      from-slate-900
      via-slate-900
      to-slate-800
      p-6
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-cyan-400
      hover:shadow-cyan-500/20
      hover:shadow-2xl
    "
    >
      {/* Glow Effect */}

      <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative flex justify-between items-start">

        <div>

          {/* Live Status */}

          <div className="flex items-center gap-2 mb-3">

            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-xs uppercase tracking-widest text-slate-400">
              {status}
            </span>

          </div>

          {/* Title */}

          <p className="text-slate-400 text-sm font-medium">
            {title}
          </p>

          {/* Value */}

          <h2 className={`text-4xl lg:text-5xl font-bold mt-4 ${color}`}>
            <AnimatedCounter value={value} />
          </h2>

          {/* Footer */}

          <p className="text-sm text-green-400 mt-5">
            ▲ Live Monitoring
          </p>

        </div>

        {/* Icon */}

        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-cyan-500/10
          border
          border-cyan-500/20
          flex
          items-center
          justify-center
          text-cyan-400
          group-hover:scale-110
          transition-transform
          duration-300
        "
        >
          {icon}
        </div>

      </div>

    </div>
  );
}