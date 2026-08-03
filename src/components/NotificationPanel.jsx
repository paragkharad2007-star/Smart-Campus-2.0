export default function NotificationPanel() {
  const notifications = [
    {
      id: 1,
      color: "text-green-400",
      title: "Engineering Block operating normally",
      time: "Just now",
    },
    {
      id: 2,
      color: "text-yellow-400",
      title: "Library occupancy increasing",
      time: "2 min ago",
    },
    {
      id: 3,
      color: "text-red-400",
      title: "Lab 3 energy consumption is high",
      time: "5 min ago",
    },
    {
      id: 4,
      color: "text-blue-400",
      title: "Water tank refilled",
      time: "8 min ago",
    },
    {
      id: 5,
      color: "text-cyan-400",
      title: "AI recommends reducing AC usage in Labs",
      time: "10 min ago",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        🔔 Notifications
      </h2>

      <div className="space-y-4">

        {notifications.map((item) => (
          <div
            key={item.id}
            className="bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >
            <p className={`font-semibold ${item.color}`}>
              {item.title}
            </p>

            <p className="text-sm text-slate-400 mt-1">
              {item.time}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}