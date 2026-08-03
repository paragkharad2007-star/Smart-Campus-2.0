export function simulateLiveData(buildings) {
  return buildings.map((building) => ({
    ...building,

    students:
      building.students + Math.floor(Math.random() * 11 - 5),

    energy: Math.min(
      100,
      Math.max(
        0,
        building.energy + Math.floor(Math.random() * 7 - 3)
      )
    ),

    water: Math.min(
      100,
      Math.max(
        0,
        building.water + Math.floor(Math.random() * 5 - 2)
      )
    ),

    temperature:
      building.temperature + (Math.random() * 2 - 1),
  }));
}