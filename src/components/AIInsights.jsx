
export default function AIInsights({ selectedBuilding }) {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-700 h-[700px] p-8 overflow-y-auto">

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-cyan-400">
          {selectedBuilding.icon} {selectedBuilding.name}
        </h2>

        <p className="text-slate-400 mt-2">
          Live AI Analysis
        </p>

      </div>

      <div className="space-y-5">

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-gray-400 text-sm">Students Present</p>
          <h3 className="text-4xl font-bold text-cyan-400 mt-2">
            {selectedBuilding.students}</h3>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <div className="flex justify-between mb-2">

            <span>⚡ Energy</span>

            <span className="text-yellow-400 font-bold">
              {selectedBuilding.energy}
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-slate-700">

            <div
              className="h-full bg-yellow-400 rounded-full transition-all duration-500"
              style={{
                width: selectedBuilding.energy,
              }}
            ></div>

          </div>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">

          <div className="flex justify-between mb-2">

            <span>💧 Water</span>

            <span className="text-blue-400 font-bold">
              {selectedBuilding.water}
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-slate-700">

            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{
                width: selectedBuilding.water,
              }}
            ></div>

          </div>

        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <h3 className="text-green-400 font-semibold mb-3">
            🤖 AI Prediction
          </h3>

          <p className="text-gray-300 leading-relaxed">
            {selectedBuilding.ai}
          </p>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500 rounded-2xl p-5">
          <h3 className="text-cyan-400 font-semibold">
            💡 AI Recommendation
          </h3>

          <p className="mt-2 text-gray-300">
            {selectedBuilding.recommendation}
          </p>
        </div>

      </div>

    </div>
  );
}