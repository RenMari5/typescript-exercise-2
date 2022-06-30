import { Racer } from "../src/racer";
import { GasCar } from "../src/gas-car";
import { SolarCar } from "../src/solar-car";
import {
  findRacersWithEmptyFuel,
  findAverageSpeed,
  getFasterRacer,
} from "../src/racer-functions";

describe("findRacersWithEmptyFuel", () => {
  test("Return an array with two empty cars that have no fuel", () => {
    const racers: GasCar[] = [
      {
        team: "Fire Tires",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Smokin' Wheels",
        speed: 75,
        fuel: 15,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return false;
        },
      },
      {
        team: "Chickens",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
    ];

    const emptyRacers = findRacersWithEmptyFuel(racers);

    expect(emptyRacers).toContain([
      {
        team: "Fire Tires",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Chickens",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
    ]);
  });
  test("Return an array with all three cars", () => {
    const racers: GasCar[] = [
      {
        team: "Fire Tires",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Smokin' Wheels",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Chickens",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
    ];

    const emptyRacers = findRacersWithEmptyFuel(racers);

    expect(emptyRacers).toContain([
      {
        team: "Fire Tires",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Smokin' Wheels",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Chickens",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
    ]);
  });
});

describe("findAverageSpeed", () => {
  test("The average speed of the cars is 65", () => {
    const racers: GasCar[] = [
      {
        team: "Fire Tires",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Smokin' Wheels",
        speed: 85,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Chickens",
        speed: 35,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
    ];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toEqual(65);
  });
  test("The average speed of gas and solar cars is ___", () => {
    const racers: GasCar[] = [
      {
        team: "Fire Tires",
        speed: 75,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Smokin' Wheels",
        speed: 85,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Chickens",
        speed: 35,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
    ];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toEqual(65);
  });
  test("The average speed of the cars is 0", () => {
    const racers: GasCar[] = [
      {
        team: "Fire Tires",
        speed: 0,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Smokin' Wheels",
        speed: 0,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
      {
        team: "Chickens",
        speed: 0,
        fuel: 0,
        accelerate() {
          return this.speed;
        },
        isFuelEmpty() {
          return true;
        },
      },
    ];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toEqual(0);
  });
  test("The average speed of an empty array is 0", () => {
    const racers: Racer[] = [];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toEqual(65);
  });
});

describe("getFasterRacer", () => {
  test("RacerA is faster", () => {});
});
