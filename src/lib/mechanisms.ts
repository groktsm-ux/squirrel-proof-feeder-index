export const mechanisms = [
  { id: 'weight-activated' as const, label: 'Weight-activated', blurb: 'A spring, shroud, or perch closes the ports when extra weight lands. Birds stay; a squirrel usually does not. If the squirrel can reach the ports without standing on the feeder, the spring never fires.' },
  { id: 'motorized' as const, label: 'Motorized spinner', blurb: 'A motor spins the perch or the whole feeder when a squirrel lands. Needs power or a charge. Failure modes are batteries, motors, and noise.' },
  { id: 'caged' as const, label: 'Caged', blurb: 'A wire cage lets small birds through or reach in. Squirrels stay out if the gaps are small enough. Some wanted birds, such as cardinals or woodpeckers, may stay out too.' },
  { id: 'pole-baffle' as const, label: 'Pole + baffle', blurb: 'The feeder is not the product. A pole and a dome or cylinder baffle stop the climb. Cornell FeederWatch still treats baffles plus distance from a jump-off as the usual defense.' },
];
export type MechanismId = (typeof mechanisms)[number]['id'];
export function mechanismById(id: string) { return mechanisms.find((m) => m.id === id); }
