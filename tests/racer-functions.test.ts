import { Racer } from "../src/racer";
import { GasCar } from "../src/gas-car";
import { SolarCar } from "../src/solar-car";
import {
  findRacersWithEmptyFuel,
  findAverageSpeed,
  getFasterRacer,
} from "../src/racer-functions";

describe("findRacersWithEmptyFuel", () => {
  test("Return an array with two cars that have no fuel", () => {
    const racers: Racer[] = [
      //   {
      //     team: "Fire Tires",
      //     speed: 75,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      //   {
      //     team: "Smokin' Wheels",
      //     speed: 75,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return false;
      //     },
      //   },
      //   {
      //     team: "Chickens",
      //     speed: 75,
      //     fuel: 0,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      new GasCar("car 1", 0),
      new GasCar("car 2"),
      new GasCar("car 3", 0),
      new GasCar("car 4"),
    ];

    const emptyRacers = findRacersWithEmptyFuel(racers);

    expect(emptyRacers).toStrictEqual([
      //   {
      //     team: "Fire Tires",
      //     speed: 75,
      //     fuel: 0,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      //   {
      //     team: "Chickens",
      //     speed: 75,
      //     fuel: 0,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      new GasCar("car 1", 0),
      new GasCar("car 3", 0),
    ]);
  });
  test("Return an array with all three cars", () => {
    const racers: GasCar[] = [
      //   {
      //     team: "Fire Tires",
      //     speed: 75,
      //     fuel: 0,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      //   {
      //     team: "Smokin' Wheels",
      //     speed: 75,
      //     fuel: 0,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      //   {
      //     team: "Chickens",
      //     speed: 75,
      //     fuel: 0,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      new GasCar("car 1", 0),
      new GasCar("car 2", 0),
      new GasCar("car 3", 0),
      new GasCar("car 4", 0),
    ];

    const emptyRacers = findRacersWithEmptyFuel(racers);

    expect(emptyRacers).toStrictEqual([
      //   {
      //     team: "Fire Tires",
      //     speed: 75,
      //     fuel: 0,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      //   {
      //     team: "Smokin' Wheels",
      //     speed: 75,
      //     fuel: 0,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      //   {
      //     team: "Chickens",
      //     speed: 75,
      //     fuel: 0,
      //     accelerate() {
      //       return this.speed;
      //     },
      //     isFuelEmpty() {
      //       return true;
      //     },
      //   },
      new GasCar("car 1", 0),
      new GasCar("car 2", 0),
      new GasCar("car 3", 0),
      new GasCar("car 4", 0),
    ]);
  });
});

describe("findAverageSpeed", () => {
  test("The average speed of the GasCar class", () => {
    const car1 = new GasCar("Car 1");
    const car2 = new GasCar("Car 2");

    car1.speed = 20;
    car2.speed = 10;

    const racers = [car1, car2];

    // [
    //   {
    //     team: "Fire Tires",
    //     speed: 75,
    //     fuel: 0,
    //     accelerate() {
    //       return this.speed;
    //     },
    //     isFuelEmpty() {
    //       return true;
    //     },
    //   },
    //   {
    //     team: "Smokin' Wheels",
    //     speed: 85,
    //     fuel: 0,
    //     accelerate() {
    //       return this.speed;
    //     },
    //     isFuelEmpty() {
    //       return true;
    //     },
    //   },
    //   {
    //     team: "Chickens",
    //     speed: 35,
    //     fuel: 0,
    //     accelerate() {
    //       return this.speed;
    //     },
    //     isFuelEmpty() {
    //       return true;
    //     },
    //   },
    // ];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toEqual(15);
  });
  test("The average speed of gas and solar cars is ___", () => {
    const car1 = new GasCar("Car 1");
    const car2 = new SolarCar("Car 2");

    car1.speed = 20;
    car2.speed = 10;

    const racers = [car1, car2];

    // const racers: Racer[] =

    // [
    //   {
    //     team: "Fire Tires",
    //     speed: 75,
    //     fuel: 0,
    //     accelerate() {
    //       return this.speed;
    //     },
    //     isFuelEmpty() {
    //       return true;
    //     },
    //   },
    //   {
    //     team: "Smokin' Wheels",
    //     speed: 85,
    //     fuel: 0,
    //     accelerate() {
    //       return this.speed;
    //     },
    //     isFuelEmpty() {
    //       return true;
    //     },
    //   },
    //   {
    //     team: "Chickens",
    //     speed: 35,
    //     fuel: 0,
    //     accelerate() {
    //       return this.speed;
    //     },
    //     isFuelEmpty() {
    //       return true;
    //     },
    //   },
    // ];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toEqual(15);
  });
  test("The average speed of the cars is 0", () => {
    const car1 = new GasCar("Car 1");
    const car2 = new SolarCar("Car 2");

    const racers = [car1, car2];

    // const racers: GasCar[] = [
    //   {
    //     team: "Fire Tires",
    //     speed: 0,
    //     fuel: 0,
    //     accelerate() {
    //       return this.speed;
    //     },
    //     isFuelEmpty() {
    //       return true;
    //     },
    //   },
    //   {
    //     team: "Smokin' Wheels",
    //     speed: 0,
    //     fuel: 0,
    //     accelerate() {
    //       return this.speed;
    //     },
    //     isFuelEmpty() {
    //       return true;
    //     },
    //   },
    //   {
    //     team: "Chickens",
    //     speed: 0,
    //     fuel: 0,
    //     accelerate() {
    //       return this.speed;
    //     },
    //     isFuelEmpty() {
    //       return true;
    //     },
    //   },
    // ];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toEqual(0);
  });
  test("The average speed of an empty array is 0", () => {
    const racers: Racer[] = [];

    const averageSpeed = findAverageSpeed(racers);

    expect(averageSpeed).toBe(0);
  });
});

describe("getFasterRacer", () => {
  test("RacerA is faster", () => {
    const racerA = new GasCar("Racer A");
    const racerB = new GasCar("Racer B");

    racerA.speed = 40;
    racerB.speed = 20;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toStrictEqual(racerA);
  });
  test("RacerA is faster", () => {
    const racerA = new GasCar("Racer A");
    const racerB = new GasCar("Racer B");

    racerA.speed = 20;
    racerB.speed = 40;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toStrictEqual(racerB);
  });
  test("RacerA is faster", () => {
    const racerA = new GasCar("Racer A");
    const racerB = new GasCar("Racer B");

    racerA.speed = 40;
    racerB.speed = 40;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toStrictEqual(null);
  });
  test("RacerA is faster", () => {
    const racerA = new GasCar("Racer A");
    const racerB = new SolarCar("Racer B");

    racerA.speed = 20;
    racerB.speed = 40;

    const fasterRacer = getFasterRacer(racerA, racerB);

    expect(fasterRacer).toStrictEqual(racerB);
  });
});
