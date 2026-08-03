export function simulateLiveData(buildings) {
  return buildings.map((building) => ({
    ...building,

    students: Math.max(
      0,
      building.students + Math.floor(Math.random() * 11 - 5)
    ),

    energy: `${Math.min(
      100,
      Math.max(20, parseInt(building.energy) + Math.floor(Math.random() * 7 - 3))
    )}%`,

    water: `${Math.min(
      100,
      Math.max(10, parseInt(building.water) + Math.floor(Math.random() * 5 - 2))
    )}%`,

    temperature: `${Math.min(
      38,
      Math.max(
        20,
        parseInt(building.temperature) + Math.floor(Math.random() * 3 - 1)
      )
    )}°C`,
  }));
}