import { Racer } from "./racer";

export function findRacersWithEmptyFuel(racers: Racer[]) {
  return racers.filter((racer) => racer.isFuelEmpty());
  //   return filteredRacers;
}

export function findAverageSpeed(racers: Racer[]) {
  if (!racers.length) return 0;
  let sum = 0;
  //   for (let racer of racers) {
  //     sum += racer.speed;
  //   }
  //   return sum / racers.length;
  racers.forEach((racer) => (sum += racer.speed));
  return sum / racers.length;
}

export function getFasterRacer(racerA: Racer, racerB: Racer) {
  //   if (racerA.speed > racerB.speed) {
  //     return racerA;
  //   } else if (racerA.speed < racerB.speed) {
  //     return racerB;
  //   } else if (racerA.speed === racerB.speed) {
  //     return null;
  //   }
  if (racerA.speed === racerB.speed) return null;
  const fasterRacer = racerA.speed > racerB.speed ? racerA : racerB;
  return fasterRacer;
}
