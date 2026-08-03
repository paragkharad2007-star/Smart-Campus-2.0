
import SensorNetwork from "./SensorNetwork";
import MovingStudents from "./MovingStudents";



export default function CampusMap({
  buildings,
  selectedBuilding,
  setSelectedBuilding,
  setActiveTab,
}) {
  console.log(buildings);

  const statusColor = {
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
  };

  return (
    <div className="mt-6 lg:mt-8">

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          🛰 Live Campus Digital Twin
        </h2>

        <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">

          <div className="absolute inset-0 bg-cyan-500/5 animate-pulse"></div>

          {/* Grass Pattern */}

          <>
            {/* Grid */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#38bdf81a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf81a_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Grass Texture */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle,#22c55e_1px,transparent_1px)] bg-[length:35px_35px]" />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-green-500/5"></div>
          </>

          {/* Roads */}

          <div className="absolute left-1/2 top-0 h-full w-5 bg-slate-700 shadow-inner -translate-x-1/2 rounded-full"></div>

          <div className="absolute top-1/2 left-0 w-full h-5 bg-slate-700 shadow-inner -translate-y-1/2 rounded-full"></div>

          <div className="absolute left-32 top-36 h-72 w-4 bg-slate-700 shadow-inner rounded-full"></div>

          <div className="absolute right-32 top-36 h-72 w-4 bg-slate-700 shadow-inner rounded-full"></div>

          {/* Trees */}

          {[
            [8, 8],
            [10, 86],
            [82, 10],
            [80, 88],
            [25, 6],
            [60, 92],
            [18, 22],
            [72, 45],
            [30, 88],
          ].map(([top, left], i) => (
            <div
              key={i}
              className="absolute text-3xl"
              style={{
                top: `${top}%`,
                left: `${left}%`,
              }}
            >
              🌳
            </div>
          ))}

          {/* Parking */}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">

            <div className="bg-slate-800 border border-slate-500 rounded-xl px-6 py-3 text-gray-300 font-semibold">

              🅿 Parking Area

            </div>

          </div>

          {/* Buildings */}

          {buildings.map((building) => (

            <button
              key={building.id}
              onClick={() => {
                setSelectedBuilding(building);
                setActiveTab("ai");
              }}
              style={{
                top: building.top,
                left: building.left,
              }}
              className={`absolute
w-40
h-28
rounded-2xl
backdrop-blur-md
transition-all
duration-300
hover:scale-110
hover:-translate-y-1
shadow-xl
${selectedBuilding.id === building.id
                  ? "bg-cyan-500/25 border-2 border-cyan-300 shadow-cyan-400/50 shadow-2xl"
                  : "bg-slate-800/90 border border-slate-600 hover:border-cyan-400 hover:shadow-cyan-500/30 hover:shadow-xl"
                }`}
            >

              <div className="absolute top-3 right-3">

                <span
                  className={`absolute inline-flex h-4 w-4 rounded-full animate-ping ${statusColor[building.status]}`}
                ></span>

                <span
                  className={`relative inline-flex h-4 w-4 rounded-full ${statusColor[building.status]}`}
                ></span>

              </div>

              <div className="relative flex justify-center mt-2">

                <div className="absolute w-12 h-12 bg-cyan-400/20 rounded-full blur-lg animate-pulse"></div>

                <div className="text-4xl relative">

                  {building.icon}

                </div>

              </div>

              <div className="font-bold text-white mt-1">

                {building.name}

              </div>

            </button>

          ))}
          <div className="absolute bottom-5 left-5 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl p-4 w-64">

            <h3 className="text-cyan-400 font-bold mb-3">
              Campus Overview
            </h3>

            <div className="space-y-2 text-sm">

              <div className="flex justify-between">
                <span>Buildings</span>
                <span>{buildings.length}</span>
              </div>

              <div className="flex justify-between">
                <span>Students</span>
                <span>
                  {buildings.reduce((sum, b) => sum + b.students, 0)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Online Sensors</span>
                <span className="text-green-400">
                  128
                </span>
              </div>

              <div className="flex justify-between">
                <span>AI Status</span>
                <span className="text-cyan-400">
                  Active
                </span>
              </div>

            </div>

          </div>

          <SensorNetwork />
          <MovingStudents />


        </div>

      </div>

    </div>
  );
}